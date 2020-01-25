import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {delay} from 'rxjs/operators';

export interface Ip {
  ip: string;
}

@Injectable({
  providedIn: 'root'
})
export class IpAddressService {

  constructor(private http: HttpClient) {}

  fetchIp(): Observable<Ip> {
    return this.http.get<Ip>('http://api.ipify.org/?format=json')
      .pipe(delay(500));
  }
}
