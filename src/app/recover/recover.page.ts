import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular'; // Importa el AlertController si deseas mostrar una alerta

@Component({
  selector: 'app-recover',
  templateUrl: './recover.page.html',
  styleUrls: ['./recover.page.scss'],
})
export class RecoverPage {
  email: string = '';

  constructor(private alertController: AlertController) {}

  async resetPassword() {
    // Validar que el correo electrónico sea válido antes de continuar
    if (!this.isValidEmail(this.email)) {
      this.presentAlert('Correo electrónico inválido', 'Por favor, ingrese un correo electrónico válido.');
      return;
    }

    // Aquí puedes implementar la lógica para el restablecimiento de contraseña
    // Por ejemplo, podrías enviar un correo electrónico al usuario con un enlace de restablecimiento de contraseña
    // También puedes realizar una llamada a una API para manejar el restablecimiento de contraseña en el servidor

    // Muestra una alerta para informar al usuario que se ha enviado un correo de restablecimiento
    this.presentAlert('Correo enviado', 'Se ha enviado un correo de restablecimiento de contraseña a su dirección de correo electrónico.');
  }

  private isValidEmail(email: string): boolean {
    // Implementa la validación del formato del correo electrónico aquí
    // Devuelve true si el correo electrónico es válido, de lo contrario, false
    // Este es un ejemplo simple, debes adaptarlo a tus necesidades
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

  async presentAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
