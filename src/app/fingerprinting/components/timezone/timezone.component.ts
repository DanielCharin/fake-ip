import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.scss']
})
export class TimezoneComponent implements OnInit {
  localTZ: string;
  systemTZ: string;

  constructor() { }

  ngOnInit(): void {
    this.systemTZ = new Date().toTimeString();
  }
}
