import { createReducer, on, Action } from '@ngrx/store';
import * as actions from '@core/store/actions/authentication/athentication.actions';
import { UserInfoInterface } from '../../../../shared/interfaces/user-interface';

export const initialState: UserInfoInterface = {
  msg: '',
  userInfo: {},
  token: null,
};

const authReducer = createReducer(
  initialState,
  on(
    actions.authenticationUser,
    (state): UserInfoInterface => ({
      ...state,
    })
  ),
  on(
    actions.authenticationUserSuccess,
    (state, { payload }): UserInfoInterface => ({
      ...state,
      msg: payload.msg,
      token: payload.token,
      userInfo: payload.userInfo,
    })
  ),
  on(
    actions.authenticationUserError,
    (state): UserInfoInterface => ({
      ...state,
    })
  )
);

export const authenticationReducer = (state: any, action: Action) =>
  authReducer(state, action);
