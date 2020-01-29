import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

class IpifyRes {
  ip: string;
}

@Injectable({
  providedIn: 'root'
})
export class IpAddressService {

  constructor(private http: HttpClient) {}

  getIPFromIpify(): Observable<IpifyRes> {
    return this.http.get<IpifyRes>('http://api.ipify.org/?format=json');
  }
}
