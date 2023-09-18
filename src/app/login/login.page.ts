import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {
  welcomeMessage: string = ''; // Variable para almacenar el mensaje de bienvenida

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // Obtén el mensaje de bienvenida de los parámetros de la URL
    this.activatedRoute.queryParams.subscribe((params) => {
      this.welcomeMessage = params['message'] || ''; // Mensaje predeterminado vacío si no se proporciona
    });
  }
}
