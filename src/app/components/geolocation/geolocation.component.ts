import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {GeolocationService} from '../../services/geolocation.service';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss']
})
export class GeolocationComponent implements OnInit {
  zoom = 12;
  center: google.maps.LatLngLiteral;
  marker;
  lat: number;
  lon: number;

  constructor(private geolocationService: GeolocationService) {}

  ngOnInit(): void {
    this.geolocationService.getGeolication().subscribe(pos => {
      this.lat = pos.coords.latitude;
      this.lon = pos.coords.longitude;
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
    try {
      this.marker = {
        position: {
          lat: this.lat,
          lng: this.lon
        },
        label: {
          color: 'red',
          text: 'Marker label',
        },
        title: 'Marker title ',
        options: { animation: google.maps.Animation.DROP }};
    } catch (e) {}
  }
}
