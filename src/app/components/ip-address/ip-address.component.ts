import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ip-address',
  templateUrl: './ip-address.component.html',
  styleUrls: ['./ip-address.component.scss']
})
export class IpAddressComponent implements OnInit {
  ip = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://api.ipify.org/?format=json')
      .subscribe((res: any) => this.ip = res.ip);
  }
}
