import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WebrtcService} from '../../services/webrtc.service';

@Component({
  selector: 'app-webrtc',
  templateUrl: './webrtc.component.html',
  styleUrls: ['./webrtc.component.scss']
})
export class WebrtcComponent implements OnInit {
  publicIP = '';
  constructor(private webrtcService: WebrtcService) {}

  @Output() whenWebRTCIP: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  IPsMatch: boolean;

  ngOnInit(): void {
    this.webrtcService.getPublicIP().then(ip => {
      this.publicIP = ip;
      this.whenWebRTCIP.emit(ip);
    });
  }
}
