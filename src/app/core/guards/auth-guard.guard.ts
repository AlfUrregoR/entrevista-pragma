import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/store/store.service';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  constructor(
    private storageService: StorageService,
    private nav: NavController
  ) {}
  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const valid = (await this.validUrl()) as boolean;

    if (!valid) {
      this.nav.navigateRoot(['/login']);
    }

    return valid;
  }

  async validUrl() {
    return new Promise((resolve) => {
      this.storageService
        .get('token')
        .then((token) => (token ? resolve(true) : resolve(false)));
    });
  }
}
