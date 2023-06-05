import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // The following will be called once in server
    // and once in browser
    console.log('This will print out in server as well as the browser')
  }
  
}
