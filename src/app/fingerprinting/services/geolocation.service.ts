import { Injectable } from '@angular/core';
import {Observable, Observer} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  getGeolication(): Observable<any> {
    return new Observable((observer: Observer<any>) => {
      if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition((position) => observer.next(position),
          (err) => {
            switch (err.code) {
              case 1:
                observer.error('Permission denied');
                break;
              case 2:
                observer.error('Position unavailable');
                break;
              case 3:
                observer.error('Timeout');
                break;
              default:
                observer.error('Unknown error');
                break;
            }
          });
      } else {
        observer.error('Geolocation API not supported not supported in this browser');
      }
    });
  }
}
