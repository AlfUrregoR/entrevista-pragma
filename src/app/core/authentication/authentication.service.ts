import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticacionDataInterface } from 'src/app/shared/interfaces/authentication-interface';
import { environment } from 'src/environments/environment';

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
