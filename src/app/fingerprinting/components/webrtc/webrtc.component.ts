import {Component, OnInit} from '@angular/core';
import {WebrtcService} from '../../services/webrtc.service';

@Component({
  selector: 'app-webrtc',
  templateUrl: './webrtc.component.html',
  styleUrls: ['./webrtc.component.scss']
})
export class WebrtcComponent implements OnInit {
  publicIP = '';
  constructor(private webrtcService: WebrtcService) {}

  ngOnInit(): void {
    this.webrtcService.getPublicIP().then(ip => this.publicIP = ip);
  }
}
