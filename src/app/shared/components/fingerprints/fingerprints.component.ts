import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fingerprints',
  templateUrl: './fingerprints.component.html',
  styleUrls: ['./fingerprints.component.scss']
})
export class FingerprintsComponent implements OnInit {
  ip = '';
  webRTCIP = '';
  IPsMatch: boolean;

  ipLocation: google.maps.LatLngLiteral;
  geoApiLocation: google.maps.LatLngLiteral;
  locationsMatch: boolean;

  constructor() { }

  ngOnInit(): void {
    this.performIpMismatchCheck();
    this.performGeoMismatchCheck();
  }

  performIpMismatchCheck() {
    const int = setInterval(() => {
      if (this.ip !== '' && this.webRTCIP !== '') {
        this.ip.localeCompare(this.webRTCIP) === 0 ?  this.IPsMatch = true : this.IPsMatch = false;
        this.IPsMatch = true;
        clearInterval(int);
      }
    }, 1000);
  }

  performGeoMismatchCheck() {
    const int = setInterval(() => {
      console.log(this.geoApiLocation);
      console.log(this.ipLocation);
      if (this.ipLocation != null && this.geoApiLocation != null) {
        this.ip.localeCompare(this.webRTCIP) === 0 ?  this.IPsMatch = true : this.IPsMatch = false;
        this.IPsMatch = true;
        clearInterval(int);
      }
    }, 1000);
  }

  updateIP(ip: string) {
    this.ip = ip;
  }

  updateWebRTCIP(ip: string) {
    this.webRTCIP = ip;
  }

  updateIpLocation(location: google.maps.LatLngLiteral) {
    this.ipLocation = location;
  }

  updateGeoApiLocation(location: google.maps.LatLngLiteral) {
    this.geoApiLocation = location;
  }
}
