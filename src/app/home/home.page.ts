import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  showLoginForm = false;

  constructor(private renderer: Renderer2) {}

  toggleLoginForm() {
    console.log("toggleLoginForm() called");
    this.showLoginForm = !this.showLoginForm;
    console.log("showLoginForm:", this.showLoginForm);
    
    if (this.showLoginForm) {
      const inputEmail = this.renderer.selectRootElement('#inputEmail');
      const inputPassword = this.renderer.selectRootElement('#inputPassword');
      
      this.renderer.setStyle(inputEmail, 'display', 'block');
      this.renderer.setStyle(inputPassword, 'display', 'block');
    } else {
      const inputEmail = this.renderer.selectRootElement('#inputEmail');
      const inputPassword = this.renderer.selectRootElement('#inputPassword');
      
      this.renderer.setStyle(inputEmail, 'display', 'none');
      this.renderer.setStyle(inputPassword, 'display', 'none');
    }
  }
}