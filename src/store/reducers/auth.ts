import { createReducer } from 'typesafe-actions';
import {
  AuthAction,
  fetchSignUpEmailAsync,
  fetchSignInEmailAsync,
} from 'store/actions/auth';

type AuthState = {
  user: any | null;
  userCredential: any | null;
};

const initialState: AuthState = {
  user: null,
  userCredential: null,
};

const authReducer = createReducer<AuthState, AuthAction>(initialState)
  .handleAction(fetchSignUpEmailAsync.success, (state, action) => ({
    ...state,
    user: action.payload,
  }))
  .handleAction(fetchSignInEmailAsync.success, (state, action) => ({
    ...state,
    userCredential: action.payload,
  }));

export default authReducer;
