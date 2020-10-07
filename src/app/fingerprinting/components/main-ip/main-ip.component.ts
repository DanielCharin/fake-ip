import { Component, OnInit } from '@angular/core';
import {IpAddressService} from '../../services/ip-address.service';
import { findFlagUrlByIso3Code } from 'country-flags-svg';

class IPData {
  ip: string;
  country: string;
  country_code?: string;
  country_code3: string;
  continent_code?: string;
  city?: string;
  region?: string;
  latitude?: string;
  longitude?: string;
  accuracy?: number;
  timezone: string;
  organization?: string;
  asn?: number;
  organization_name?: string;
}

@Component({
  selector: 'app-main-ip',
  templateUrl: './main-ip.component.html',
  styleUrls: ['./main-ip.component.scss']
})
export class MainIpComponent implements OnInit {
  ipData: IPData = {ip: 'n/a', country: 'n/a', country_code3: 'n/a', timezone: 'n/a'};
  countryFlagSrc: '';

  constructor(private ipAddressService: IpAddressService) {}

  ngOnInit(): void {
    this.ipAddressService.getIPData().subscribe(next => {
      this.ipData = next;
      this.countryFlagSrc = findFlagUrlByIso3Code(this.ipData.country_code3);
    });
  }
}
