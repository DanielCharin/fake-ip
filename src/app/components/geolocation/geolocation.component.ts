import {AfterViewInit, Component, OnInit} from '@angular/core';
import {GeolocationService} from '../../services/geolocation.service';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss']
})
export class GeolocationComponent {
  lat: number;
  constructor(private geolocationService: GeolocationService) {}

  setGeo(position) {
    console.log('works');
    position.then((res) => {
      this.lat = res.coords.latitude;
    });
  }
}
