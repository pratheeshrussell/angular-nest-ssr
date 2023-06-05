import { Component, OnInit } from '@angular/core';
import { MetaTagServiceService } from 'src/app/services/meta-tag-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(private metaService:MetaTagServiceService){}
  ngOnInit(): void {
    this.metaService.setMetaTag('og:title', 'Home page');
    this.metaService.setMetaTag('og:description', this.metaService.generateRandomText(10));
  }
  
}
