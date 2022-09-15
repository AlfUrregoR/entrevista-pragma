import { ActionReducerMap } from '@ngrx/store';
import { AppStateInterface } from '@shared/interfaces/app-state-interface';
import { authenticationReducer } from './reducers/authentication/authentication.effects';

export const appReducers: ActionReducerMap<AppStateInterface> = {
  // eslint-disable-next-line @ngrx/no-reducer-in-key-names
  authenticationReducer,
};
