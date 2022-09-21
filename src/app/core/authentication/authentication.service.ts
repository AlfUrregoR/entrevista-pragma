import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { AuthenticacionDataInterface } from '@shared/interfaces/authentication-interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { authenticationLogout } from '../store/actions/authentication/athentication.actions';
import { StorageService } from '../services/store/store.service';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly uriLogin = '/api/login/';
  private httpNoIntercept: HttpClient;

  constructor(
    private store: Store,
    private storageService: StorageService,
    private nav: NavController,
    private handler: HttpBackend
  ) {
    this.httpNoIntercept = new HttpClient(handler);
  }

  postLogin(payload: AuthenticacionDataInterface) {
    return this.httpNoIntercept.post(
      `${environment.backendUrl}${this.uriLogin}`,
      payload
    ) as Observable<any>;
  }

  async logout() {
    this.store.dispatch(authenticationLogout());
    await this.storageService.clear();
    this.nav.navigateRoot(['/login']);
  }
}
