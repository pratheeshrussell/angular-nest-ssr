import { isPlatformServer } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MetaTagServiceService } from 'src/app/services/meta-tag-service.service';

@Component({
  standalone:true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object,private metaService:MetaTagServiceService){}
  ngOnInit(): void {
    if (isPlatformServer(this.platformId)) {
      // Code specific to the server - like setting the title and tags
      this.metaService.setTitle('About ' + this.metaService.generateRandomText(10));
    }
    
  }

}
