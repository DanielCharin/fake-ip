import { Injectable } from '@angular/core';
import {Observable, Observer} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() {}

  getGeolication(): Observable<any> {
    return new Observable((observer: Observer<any>) => {
      if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition((position) => {
          observer.next(position);
        });
      } else {
        observer.error('Browser location API not supported');
      }
    });
  }
}
