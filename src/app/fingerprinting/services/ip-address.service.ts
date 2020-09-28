import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

class IpData {
  county: string;
  // tslint:disable-next-line:variable-name
  country_3: string;
  ip: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class IpAddressService {
  constructor(private http: HttpClient) {}

  getIPData(): Observable<IpData> {
    return this.http.get<IpData>('https://get.geojs.io/v1/ip/country.json');
  }
}
