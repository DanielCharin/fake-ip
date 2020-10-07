import {Injectable} from '@angular/core';

interface Window extends globalThis.Window {
  mozRTCPeerConnection: RTCPeerConnection;
  RTCPeerConnection: RTCPeerConnection;
  webkitRTCPeerConnection: webkitRTCPeerConnection;
  webkitOfflineAudioContext: any;
}

@Injectable({
  providedIn: 'root'
})
export class WebrtcService {
  servers = {iceServers: [{urls: 'stun:stun.l.google.com:19305'}]};
  publicIP = '';

  constructor() {}

  public getPublicIP(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.performPeerConnection();

      const int = setInterval(() => {
        if (this.publicIP !== '') {
          resolve(this.publicIP);
          clearInterval(int);
        }
      }, 500);


      setTimeout(() => {
        reject('Timeout getting WebRTC IP');
      }, 10_000);
    });
  }

  private performPeerConnection() {
    let RTCPeerConnection;

    if (window.document.body) {
      RTCPeerConnection = (window as unknown as Window).RTCPeerConnection ||
        (window as unknown as Window).mozRTCPeerConnection ||
        (window as unknown as Window).webkitRTCPeerConnection;
    }

    if (!RTCPeerConnection) {
      const iframe = document.createElement('iframe');
      iframe.setAttribute('id', 'iframe');
      iframe.sandbox.value = 'allow-same-origin';
      iframe.style.display = 'none';

      const win = iframe.contentWindow as Window;
      RTCPeerConnection = win.RTCPeerConnection || win.mozRTCPeerConnection || win.webkitRTCPeerConnection;
    }

    const peerConnection = new RTCPeerConnection(this.servers);
    peerConnection.onicecandidate = (ice: RTCPeerConnectionIceEvent) => {
      if (ice.candidate) {
        this.extractPublicIP(peerConnection);
      }
    };

    peerConnection.createDataChannel('');

    peerConnection.createOffer().then(offer => {
      peerConnection.setLocalDescription(new RTCSessionDescription(offer));
    });
  }

  private extractPublicIP(peerConnection: RTCPeerConnection) {
    const lines = peerConnection.localDescription.sdp.split('\n');
    lines.forEach(line => {
      const exp = new RegExp('(\\d{1,3}\\.){3}(\\d{1,3})');
      if (line.startsWith('a=candidate:') && line.match(exp)) {
        this.publicIP = line.match(exp)[0];
      }
    });
  }
}
