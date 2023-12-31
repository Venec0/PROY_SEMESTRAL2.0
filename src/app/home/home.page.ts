import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: string = '';
  password: string = '';

  users = [
    { email: 'joe.medina@duocuc.cl', password: 'contraseña1', name: 'Joel Medina' },
    { email: 'fab.aguila@duocuc.cl', password: 'contraseña2', name: 'Fabián Águila' },
  ];

  constructor(
    private alertController: AlertController,
    private router: Router
  ) {}

  async login() {
    const user = this.users.find((u) => u.email === this.email);

    if (user && user.password === this.password) {
      const welcomeMessage = `Bienvenido, ${user.name}!`;

      const alert = await this.alertController.create({
        header: 'Inicio de sesión exitoso',
        message: welcomeMessage,
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.router.navigate(['/login'], {
                queryParams: { message: `Ingresado como ${user.name}` },
              });
            },
          },
        ],
      });

      await alert.present();
    } else {
      const errorMessage = 'Credenciales incorrectas';

      const alert = await this.alertController.create({
        header: 'Error',
        message: errorMessage,
        buttons: ['OK'],
      });

      await alert.present();
    }
  }
}
