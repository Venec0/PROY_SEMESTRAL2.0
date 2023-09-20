import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {
  welcomeMessage: string = '';
  aulas: any[] = [
    { id: 1, codigo: '12345', qrCodeImage: 'assets/icon/qr-code.png' },
    { id: 2, codigo: '67890', qrCodeImage: 'assets/icon/qr-code.png' },
    { id: 3, codigo: '54321', qrCodeImage: 'assets/icon/qr-code.png' },
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.welcomeMessage = params['message'] || '';
    });
  }

  mostrarCodigoQR(qrCodeImage: string) {
    // Puedes mostrar la imagen del código QR en una vista modal o en una nueva página.
    // Aquí se muestra en una vista modal como ejemplo.
    const modal = document.createElement('ion-modal');
    modal.component = 'app-qr-modal'; // Crea un componente para mostrar la imagen del código QR
    modal.componentProps = { qrCodeImage };
    document.body.appendChild(modal);
    return modal.present();
  }
}
