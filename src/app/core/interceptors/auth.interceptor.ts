import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from '@core/services/store/store.service';
import { from, Observable, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ToastService } from '../services/toast/toast.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private storageService: StorageService,
    private toastService: ToastService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // YOU CAN ALSO DO THIS
    // const token = this.authenticationService.getToke()

    return from(this.storageService.get('token')).pipe(
      switchMap((token) =>
        next.handle(this.addAuthToken(request, token)).pipe(
          map((event: HttpEvent<any>) => event),
          catchError((error: HttpErrorResponse) => {
            this.toastService.show({
              duration: 3000,
              message: error.error.msg,
              color: 'danger',
            });

            return throwError(() => error);
          })
        )
      )
    );
  }

  addAuthToken(request: HttpRequest<any>, token: string) {
    if (!token) {
      return request;
    }

    return request.clone({
      setHeaders: {
        token: `${token}`,
      },
    });
  }

  handleHttpError(requestError: HttpErrorResponse) {
    return throwError(() => requestError);
  }
}
