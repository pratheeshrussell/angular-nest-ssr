import { isPlatformServer } from '@angular/common';
import { Component, Inject, Optional, PLATFORM_ID } from '@angular/core';
import { RESPONSE } from '@nestjs/ng-universal/dist/tokens';
import { Response } from 'express';
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: any,
    @Optional() @Inject(RESPONSE) res: Response
  ) {
    // `res` is the express response, only available on the server
    if (isPlatformServer(this.platformId)) {
      res.status(404);
    }
  }
}
