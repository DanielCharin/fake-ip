import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IpAddressService} from '../../services/ip-address.service';
import { findFlagUrlByIso3Code } from 'country-flags-svg';
import {IPData} from '../../../model/IPData';

@Component({
  selector: 'app-main-ip',
  templateUrl: './main-ip.component.html',
  styleUrls: ['./main-ip.component.scss']
})
export class MainIpComponent implements OnInit {
  ipData: IPData = {ip: 'n/a', country: 'n/a', country_code3: 'n/a', latitude: 'n/a'};
  countryFlagSrc: '';

  @Output()
  whenIP: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  whenIpLocation: EventEmitter<google.maps.LatLngLiteral> = new EventEmitter<google.maps.LatLngLiteral>();

  constructor(private ipAddressService: IpAddressService) {}

  ngOnInit(): void {
    this.ipAddressService.getIPData().subscribe(next => {
      this.ipData = new IPData(next);
      this.countryFlagSrc = findFlagUrlByIso3Code(this.ipData.country_code3);
      this.whenIP.emit(next.ip);
      this.whenIpLocation.emit({
        lat: parseFloat(parseFloat(this.ipData.latitude).toFixed(2)),
        lng: parseFloat(parseFloat(this.ipData.longitude).toFixed(2))});
    });
  }
}
