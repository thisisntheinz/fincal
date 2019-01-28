import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

import {
  GoogleApiModule,
  GoogleApiServic,
  GoogleAuthService,
  NgGapiClientConfig,
  NG_GAPI_CONFIG,
  GoogleApiConfig
} from 'ng-gapi';

const gapiConfig: NgGapiClientConfig = {
  client_id: environment.googleClientID,
  discoveryDocs: ['https://analyticsreporting.googleapis.com/$discovery/rest?version=v4'],
  scope: [
    'https://www.googleapis.com/auth/calendar.readonly'
  ].join(' ');
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiConfig
    })
  ]
})
export class GapiModuleModule { }
