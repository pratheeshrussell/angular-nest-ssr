import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

// This is depreciated and not needed
// import { ServerTransferStateModule } from '@angular/platform-server';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
   // ServerTransferStateModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
