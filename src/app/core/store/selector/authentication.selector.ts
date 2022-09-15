import { createSelector } from '@ngrx/store';
import { UserInfoInterface } from '@shared/interfaces/user-interface';
import { authenticationReducer } from '../reducers/authentication/authentication.effects';

export const selectAuthentication = (state: UserInfoInterface) => state;

export const selectAuthenticationFlat = createSelector(
  selectAuthentication,
  (state: UserInfoInterface) => state
);
