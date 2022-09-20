import { Injectable } from '@angular/core';
import { ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toast: HTMLIonToastElement;

  constructor(private toastController: ToastController) {}

  public async show(options: ToastOptions) {
    this.toast = await this.toastController.create({
      ...options,
    });

    await this.toast.present();
  }

  public hidden() {
    if (this.toast) {
      this.toast.dismiss();
    }
  }
}
