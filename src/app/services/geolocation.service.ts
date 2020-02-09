import {Injectable, OnInit} from '@angular/core';
import {GeolocationComponent} from '../components/geolocation/geolocation.component';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() {}

  passGeo(position) {
    console.log(position.coords.latitude);
  }

  errHandler(err) {
    if (err.code === 1) {
      console.log('Error: Access denied!');
    } else if (err.code === 2) {
      console.log(err.message);
    }
  }

  getGeolocation() {
    const options = {timeout: 10000};
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(this.passGeo, this.errHandler);
    }
  }
}

