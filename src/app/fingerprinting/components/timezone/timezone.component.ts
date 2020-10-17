import { Component, OnInit } from '@angular/core';
import {IpAddressService} from '../../services/ip-address.service';
import {IPData} from '../../../model/IPData';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.scss']
})
export class TimezoneComponent implements OnInit {
  localTZ: string;
  systemTZ: string;
  timezonesMatch: boolean;

  constructor(private ipAddressService: IpAddressService) { }

  ngOnInit(): void {
    const systemTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;

    this.ipAddressService.getIPData().subscribe(next => {
      const localTZ = new IPData(next).timezone;
      this.setTzValues(systemTZ, localTZ);
    });
  }

  // TODO: Unit test
  private setTzValues(system: string, local: string): void {
    let systemOffsetInHours;
    let localOffsetInHours;

    systemOffsetInHours = moment().tz(system).utcOffset() / 60 > 0 ?
      'UTC+' + moment().tz(system).utcOffset() / 60 :
      'UTC' + moment().tz(system).utcOffset() / 60;

    localOffsetInHours = moment().tz(local).utcOffset() / 60 > 0 ?
      'UTC+' + moment().tz(local).utcOffset() / 60 :
      'UTC' + moment().tz(local).utcOffset() / 60;

    this.systemTZ = system + ' ' + systemOffsetInHours;
    this.localTZ = local + ' ' + localOffsetInHours;
    this.performTimezoneMismatchCheck();
  }

  private performTimezoneMismatchCheck() {
    this.timezonesMatch = this.systemTZ.localeCompare(this.localTZ) === 0;
  }
}
