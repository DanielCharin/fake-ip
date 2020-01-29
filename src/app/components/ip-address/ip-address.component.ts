import { Component, OnInit } from '@angular/core';
import {IpAddressService} from '../../services/ip-address.service';

@Component({
  selector: 'app-ip-address',
  templateUrl: './ip-address.component.html',
  styleUrls: ['./ip-address.component.scss']
})
export class IpAddressComponent implements OnInit {
  ip = '';

  constructor(private ipAddressService: IpAddressService) {
  }

  ngOnInit() {
    this.ipAddressService.getIPFromIpify()
      .subscribe(res => {
        this.ip = res.ip;
      });
  }
}
