import {Component, OnInit} from '@angular/core';

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

  // TODO: Unit test
  performIpMismatchCheck() {
    const int = setInterval(() => {
      if (this.ip !== '' && this.webRTCIP !== '') {
        this.ip.localeCompare(this.webRTCIP) === 0 ?  this.IPsMatch = true : this.IPsMatch = false;
        clearInterval(int);
      }
    }, 1000);
  }

  // TODO: Unit test
  performGeoMismatchCheck() {
    const int = setInterval(() => {
      if (this.ipLocation != null && this.geoApiLocation != null) {
        if (this.ipLocation.lng > this.geoApiLocation.lng) {
          this.ipLocation.lng - this.geoApiLocation.lng < 0.2 ? this.locationsMatch = true : this.locationsMatch = false;
        } else {
          this.geoApiLocation.lng - this.ipLocation.lng < 0.2 ? this.locationsMatch = true : this.locationsMatch = false;
        }

        if (this.ipLocation.lat > this.geoApiLocation.lat) {
          this.ipLocation.lat - this.geoApiLocation.lat < 0.2 ? this.locationsMatch = true : this.locationsMatch = false;
        } else {
          this.geoApiLocation.lat - this.ipLocation.lat < 0.2 ? this.locationsMatch = true : this.locationsMatch = false;
        }

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
