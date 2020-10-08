import { Injectable } from '@angular/core';
import {Observable, Observer} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor(private http: HttpClient) {}

  getGeolication(): Observable<any> {
    return new Observable((observer: Observer<any>) => {
      if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition((position) => {
          observer.next(position);
        },
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

  getReverseGeo(lat: number, lon: number): Observable<any> {
    return this.http
      .get('https://api.opencagedata.com/geocode/v1/json?q=' + lat + '+' + lon + '&key=ba35bae472bc4195a7f7aa2c009bb199');
  }
}
