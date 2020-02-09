import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { IpAddressComponent } from './components/ip-address/ip-address.component';
import { WebrtcComponent } from './components/webrtc/webrtc.component';
import {GeolocationComponent} from './components/geolocation/geolocation.component';

@NgModule({
  declarations: [
    AppComponent,
    IpAddressComponent,
    WebrtcComponent,
    GeolocationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
