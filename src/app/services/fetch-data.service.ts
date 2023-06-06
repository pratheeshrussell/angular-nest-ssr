import { isPlatformServer } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional, PLATFORM_ID, TransferState, makeStateKey } from '@angular/core';
import { Observable, catchError, of, tap, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  private readonly SERVER_DATA_KEY = makeStateKey<any>('welcomeData');

  constructor(private http: HttpClient,
    private transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: Object,
   @Optional() @Inject('serverUrl') protected serverUrl: string) { }

   getDataOld(): Observable<any> {
    // link must be of form http://localhost 
    // to use TransferHttpCacheModule
    let baseUrl = 'http://localhost:4200'; // this.serverUrl ? this.serverUrl : '';
    return this.http.get<any>(`${baseUrl}/api/hello-world`)
   }

  getData(): Observable<any> {
    if (this.transferState.hasKey(this.SERVER_DATA_KEY)) {
      console.log('value already exists in transferState')
      const storedData = this.transferState.get<any>(this.SERVER_DATA_KEY, null);   
      this.transferState.remove(this.SERVER_DATA_KEY);
      // just convert to an observable
      return of(storedData);
    } else {
      let baseUrl = this.serverUrl ? this.serverUrl : '';
      return this.http.get<any>(`${baseUrl}/api/hello-world`).pipe(
        tap(data => {
          console.log('value does not exist - fetching data ',data)
          if (isPlatformServer(this.platformId)) {
            this.transferState.set(this.SERVER_DATA_KEY, data);
          }
        })
      );
    }
  }
}
