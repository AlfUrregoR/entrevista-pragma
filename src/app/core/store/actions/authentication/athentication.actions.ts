import { createAction, props } from '@ngrx/store';
import { UserInfoInterface } from '@shared/interfaces/user-interface';

export const authenticationUser = createAction(
  '[AUTHENTICATION] LOGIN USER',
  props<{ documentNumber: number; password: string }>()
);

export const authenticationUserSuccess = createAction(
  '[AUTHENTICATION] LOGIN USER SUCCESS',
  props<{ payload: UserInfoInterface }>()
);

export const authenticationUserError = createAction(
  '[AUTHENTICATION] LOGIN USER ERROR',
  props<{ payload: UserInfoInterface }>()
);

export const authenticationLogout = createAction(
  '[AUTHENTICATION] LOGOUT USER',
);
