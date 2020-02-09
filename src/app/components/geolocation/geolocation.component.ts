import { Component, OnInit } from '@angular/core';
import {GeolocationService} from '../../services/geolocation.service';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss']
})
export class GeolocationComponent implements OnInit {

  constructor(private geolocationService: GeolocationService) {}

  ngOnInit(): void {
    this.geolocationService.getGeolocation();
  }
}
