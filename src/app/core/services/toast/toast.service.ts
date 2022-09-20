import { Injectable } from '@angular/core';
import { ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastController: ToastController) {}

  public async show(options: ToastOptions) {
    const toast = await this.toastController.create({
      ...options,
    });

    await toast.present();
  }
}
