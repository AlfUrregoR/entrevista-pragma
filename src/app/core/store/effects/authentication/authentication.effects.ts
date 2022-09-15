import { Injectable, OnDestroy } from '@angular/core';
import { AuthenticationService } from '@core/authentication/authentication.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable, mergeMap, map, catchError, of } from 'rxjs';
import {
  authenticationUser,
  authenticationUserError,
  authenticationUserSuccess,
} from '@core/store/actions/authentication/athentication.actions';

@Injectable()
export class AuthenticationEffects {
  // eslint-disable-next-line arrow-body-style
  authenticationUser$ = createEffect((): Observable<any> => {
    return this.actions$.pipe(
      ofType(authenticationUser),
      mergeMap(({ documentNumber, password }) =>
        this.service.postLogin({ documentNumber, password }).pipe(
          map((payload) => authenticationUserSuccess({ payload })),
          catchError((err) => of(authenticationUserError({ payload: err })))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private store: Store,
    private service: AuthenticationService
  ) {}
}
