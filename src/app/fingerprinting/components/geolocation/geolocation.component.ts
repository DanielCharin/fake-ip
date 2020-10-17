import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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

  @Output()
  whenGeoApiLocation: EventEmitter<google.maps.LatLngLiteral> = new EventEmitter<google.maps.LatLngLiteral>();

  constructor(private geolocationService: GeolocationService) {}

  ngOnInit(): void {
    this.geolocationService.getGeolication().subscribe(pos => {
      this.lat = parseFloat(pos.coords.latitude.toFixed(2));
      this.lon = parseFloat(pos.coords.longitude.toFixed(2));
      this.whenGeoApiLocation.emit({lat: this.lat, lng: this.lon});

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
