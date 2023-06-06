import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
//import { TransferHttpCacheModule} from '@nguniversal/common';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,  
    HttpClientModule,
    AppRoutingModule,

    //TransferHttpCacheModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
