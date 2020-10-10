import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WebrtcService} from '../../services/webrtc.service';
import {IpAddressService} from '../../services/ip-address.service';
import { findFlagUrlByIso3Code } from 'country-flags-svg';

@Component({
  selector: 'app-webrtc',
  templateUrl: './webrtc.component.html',
  styleUrls: ['./webrtc.component.scss']
})
export class WebrtcComponent implements OnInit {
  publicIP = 'n/a';
  country = 'n/a';
  countryFlagSrc = '';
  constructor(private webrtcService: WebrtcService,
              private ipAddressService: IpAddressService) {}

  @Output() whenWebRTCIP: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  IPsMatch: boolean;

  ngOnInit(): void {
    this.webrtcService.getPublicIP().then(ip => {
      this.publicIP = ip;
      this.whenWebRTCIP.emit(ip);
      this.determineCountry(ip);
    });
  }

  determineCountry(ip: string) {
    this.ipAddressService.getCountryByIP(ip).subscribe(data => {
      this.country = data.name;
      this.countryFlagSrc = findFlagUrlByIso3Code(data.country_3);
    });
  }
}
