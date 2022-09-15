import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { AuthenticacionDataInterface } from '@shared/interfaces/authentication-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly uriLogin = '/api/login/';

  constructor(private http: HttpClient) {}

  postLogin(payload: AuthenticacionDataInterface) {
    return this.http.post(
      `${environment.backendUrl}${this.uriLogin}`,
      payload
    ) as Observable<any>;
  }
}
