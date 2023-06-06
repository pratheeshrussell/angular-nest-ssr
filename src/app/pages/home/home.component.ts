import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaTagServiceService } from 'src/app/services/meta-tag-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  welcomeMessage = '';
  constructor(private metaService:MetaTagServiceService,private actRoute: ActivatedRoute){}
  ngOnInit() {
    this.metaService.setMetaTag('og:title', 'Home page');
    this.metaService.setMetaTag('og:description', this.metaService.generateRandomText(10));
    this.getWelcomeMessage();
  }

  getWelcomeMessage(){
    this.actRoute.data.subscribe(data => {
      this.welcomeMessage = data['welcomeData'].message;
    })

  }
  
}
