import {Component, OnInit} from '@angular/core';
import {GeolocationService} from '../../services/geolocation.service';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss']
})
export class GeolocationComponent implements OnInit {
  lat: number;
  constructor(private geolocationService: GeolocationService) {}

  ngOnInit(): void {
    this.geolocationService.getGeolication().subscribe(pos => {
      this.lat = pos.coords.latitude;
    });
  }
}
