import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpAddressService {
  constructor(private http: HttpClient) {}

  getIPData(): Observable<any> {
    return this.http.jsonp('https://get.geojs.io/v1/ip/geo.js', 'callback');
  }

  getCountryByIP(ip: string): Observable<any> {
    return this.http.jsonp('https://get.geojs.io/v1/ip/country/' + ip + '.js', 'callback');
  }
}
