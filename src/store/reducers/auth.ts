import { createReducer } from 'typesafe-actions';
import { AuthAction, fetchSignUpEmailAsync } from 'store/actions/auth';

type AuthState = {
  user: any | null;
};

const initialState: AuthState = {
  user: null,
};

const authReducer = createReducer<AuthState, AuthAction>(
  initialState
).handleAction(fetchSignUpEmailAsync.success, (state, action) => ({
  ...state,
  user: action.payload,
}));

export default authReducer;
