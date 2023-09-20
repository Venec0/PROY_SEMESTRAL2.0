import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.page.html',
  styleUrls: ['./recover.page.scss'],
})
export class RecoverPage {
  email: string = '';
  newPassword: string = ''; // Nueva contraseña
  showNewPasswordInput: boolean = false; // Controla si se muestra el campo de nueva contraseña

  constructor(private alertController: AlertController) {}

  async resetPassword() {
    // Validar que el correo electrónico sea válido antes de continuar
    if (!this.isValidEmail(this.email)) {
      this.presentAlert('Correo electrónico inválido', 'Por favor, ingrese un correo electrónico válido.');
      return;
    }

    // Encuentra el usuario correspondiente al correo electrónico (asumiendo que tienes una lista de usuarios)
    const user = this.findUserByEmail(this.email);

    if (!user) {
      this.presentAlert('Usuario no encontrado', 'No se encontró un usuario con el correo electrónico proporcionado.');
      return;
    }

    if (this.showNewPasswordInput) {
      // Aquí puedes implementar la lógica para cambiar la contraseña del usuario con la nueva contraseña
      // Por ejemplo, puedes actualizar la contraseña en la lista de usuarios
      user.password = this.newPassword;

      // Muestra una alerta para informar al usuario que la contraseña se ha cambiado
      this.presentAlert('Contraseña cambiada', 'Su contraseña ha sido cambiada con éxito.');

      // Limpia los campos
      this.email = '';
      this.newPassword = '';
      this.showNewPasswordInput = false;
    } else {
      // Muestra el campo de nueva contraseña para que el usuario ingrese su nueva contraseña
      this.showNewPasswordInput = true;
    }
  }

  private isValidEmail(email: string): boolean {
    // Implementa la validación del formato del correo electrónico aquí
    // Devuelve true si el correo electrónico es válido, de lo contrario, false
    // Este es un ejemplo simple, debes adaptarlo a tus necesidades
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

  private findUserByEmail(email: string) {
    // Busca un usuario en tu lista de usuarios por su correo electrónico
    // Devuelve el usuario si se encuentra, de lo contrario, null
    return this.users.find((u) => u.email === email);
  }

  async presentAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  // Define tu lista de usuarios aquí (debes sincronizarla con la de HomePage)
  users = [
    { email: 'joe.medina@duocuc.cl', password: 'contraseña1', name: 'Joel Medina' },
    { email: 'fab.aguila@duocuc.cl', password: 'contraseña2', name: 'Fabián Águila' },
  ];
}
