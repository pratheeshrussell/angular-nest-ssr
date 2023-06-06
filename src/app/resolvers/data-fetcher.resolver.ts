import { Injectable } from '@angular/core';
import { Resolve, ResolveFn } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { FetchDataService } from '../services/fetch-data.service';

@Injectable({ providedIn: 'root'})
export class DataFetcherResolver {
  constructor(private fetchData: FetchDataService) {}
  resolve(): Observable<any> {
    return this.fetchData.getData().pipe(
      catchError(error => {
        return of('Error Occured');
      })
    );
  }
}