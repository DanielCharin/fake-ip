import {Component, OnInit} from '@angular/core';
import {GeolocationService} from '../../services/geolocation.service';

interface Marker {
  position: google.maps.LatLngLiteral;
  label?: google.maps.MarkerLabel;
  title?: string;
  options?: google.maps.MarkerOptions;
}

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss']
})
export class GeolocationComponent implements OnInit {
  zoom = 12;
  center: google.maps.LatLngLiteral;
  marker = {} as Marker;
  lat: number;
  lon: number;
  accuracy: number;

  constructor(private geolocationService: GeolocationService) {}

  ngOnInit(): void {
    this.geolocationService.getGeolication().subscribe(pos => {
      this.lat = pos.coords.latitude;
      this.lon = pos.coords.longitude;
      this.accuracy = pos.coords.accuracy;

      this.center = {
        lat: pos.coords.latitude, lng: pos.coords.longitude
      };
      this.addMarker();
    },
      err => {
        console.log(err);
      });
  }

  addMarker(): void {
     this.marker = {
        position: {
          lat: this.lat,
          lng: this.lon
        },
        options: {
          animation: google.maps.Animation.DROP
        }
     };
  }
}
