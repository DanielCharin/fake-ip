import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { WebrtcComponent } from './fingerprinting/components/webrtc/webrtc.component';
import {GeolocationComponent} from './fingerprinting/components/geolocation/geolocation.component';
import {GoogleMapsModule} from '@angular/google-maps';
import {AppRoutingModule} from './app-routing.module';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FingerprintsComponent } from './shared/components/fingerprints/fingerprints.component';
import { MainIpComponent } from './fingerprinting/components/main-ip/main-ip.component';
import { DataComponent } from './shared/components/data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    WebrtcComponent,
    GeolocationComponent,
    MainLayoutComponent,
    FooterComponent,
    HeaderComponent,
    FingerprintsComponent,
    MainIpComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
