import { createReducer } from 'typesafe-actions';
import {
  AuthAction,
  fetchSignUpEmailAsync,
  fetchSignInEmailAsync,
  fetchGetCurrentUserAsync,
  fetchUpdateUserAsync,
  fetchSignOutAsync,
  fetchOnAuthStateChangeAsync,
} from 'store/actions/auth';

type AuthState = {
  authUser: firebase.auth.UserCredential | null;
  loading: boolean;
};

const initialState: AuthState = {
  authUser: null,
  loading: false,
};

const authReducer = createReducer<AuthState, AuthAction>(initialState)
  .handleAction(fetchGetCurrentUserAsync.success, (state, action) => ({
    ...state,
    authUser: action.payload,
  }))
  .handleAction(fetchOnAuthStateChangeAsync.success, (state, action) => ({
    ...state,
    authUser: action.payload,
  }))
  .handleAction(fetchUpdateUserAsync.success, (state, action) => ({
    ...state,
    authUser: action.payload,
  }))
  .handleAction(fetchSignOutAsync.success, (state, action) => ({
    ...state,
    authUser: null,
  }));

export default authReducer;
