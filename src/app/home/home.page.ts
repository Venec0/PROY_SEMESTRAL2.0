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
    { email: 'usuario1@example.com', password: 'contraseña1', name: 'Nombre1' },
    { email: 'usuario2@example.com', password: 'contraseña2', name: 'Nombre2' },
  ];

  constructor(
    private alertController: AlertController,
    private router: Router
  ) {}

  async login() {
    const user = this.users.find((u) => u.email === this.email);

    if (user && user.password === this.password) {
      const welcomeMessage = `Bienvenido, ${user.name}!`;

      // Muestra un alert con el mensaje de bienvenida
      const alert = await this.alertController.create({
        header: 'Inicio de sesión exitoso',
        message: welcomeMessage,
        buttons: [
          {
            text: 'OK',
            handler: () => {
              // Redirige al usuario a la página de "login" con un mensaje en la URL
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

      // Muestra un alert con el mensaje de error
      const alert = await this.alertController.create({
        header: 'Error',
        message: errorMessage,
        buttons: ['OK'],
      });

      await alert.present();
    }
  }
}
