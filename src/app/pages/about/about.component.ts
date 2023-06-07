import { isPlatformServer } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MetaTagServiceService } from 'src/app/services/meta-tag-service.service';
import { TransferState, makeStateKey } from '@angular/core';

@Component({
  standalone:true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  private readonly SERVER_DATA_KEY = makeStateKey<any>('pageTitle');
  constructor(private transferState: TransferState,
    private metaService:MetaTagServiceService,
    @Inject(PLATFORM_ID) private platformId: Object){}
  ngOnInit(): void {
    // Check if key exists
    if (this.transferState.hasKey(this.SERVER_DATA_KEY)) {
      console.log('title already exists in transferState');
      // If it does then get that data and use it
      const titleFromServer = this.transferState.get<any>(this.SERVER_DATA_KEY, null);   
      // remove the data from the state so that it wont be used again
      this.transferState.remove(this.SERVER_DATA_KEY);
      // set the same title sent from the server
      this.metaService.setTitle(titleFromServer);
  
    }else{
      // no data is available in state so generate and set it
      let randomTitle = this.metaService.generateRandomText(10);
      this.metaService.setTitle(randomTitle);
      if (isPlatformServer(this.platformId)) {
        // Make sure you set it to the state
        console.log('value does not exist - setting new title ',randomTitle)
        this.transferState.set(this.SERVER_DATA_KEY, randomTitle);
      }
    }
  }

}
