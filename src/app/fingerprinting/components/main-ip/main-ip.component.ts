import { Component, OnInit } from '@angular/core';
import {IpAddressService} from '../../services/ip-address.service';
import { findFlagUrlByIso3Code } from 'country-flags-svg';

@Component({
  selector: 'app-main-ip',
  templateUrl: './main-ip.component.html',
  styleUrls: ['./main-ip.component.scss']
})
export class MainIpComponent implements OnInit {
  ip: string;
  countryFlag: string;

  constructor(private ipAddressService: IpAddressService) { }

  ngOnInit(): void {
    this.ipAddressService.getIPData()
      .subscribe(res => {
        this.ip = res.ip;
        this.countryFlag = findFlagUrlByIso3Code(res.country_3);
      });
  }
}
