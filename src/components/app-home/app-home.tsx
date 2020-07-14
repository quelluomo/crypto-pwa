import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>CryptoPWA</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-list lines="none"></ion-list>
      </ion-content>,

      <ion-footer>
        <p>
          <strong>DISCLAIMER:</strong> Do not use this application to make investment decisions.
          Displayed prices may not reflect actual prices.
        </p>
      </ion-footer>
    ];
  }
}
