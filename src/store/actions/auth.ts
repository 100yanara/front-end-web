import { ActionType, createAsyncAction } from 'typesafe-actions';

export type SIGNUPEMAIL = {
  name: string;
  email: string;
  password: string;
};

export type SIGNINEMAIL = {
  email: string;
  password: string;
};

const fetchSignUpEmailAsync = createAsyncAction(
  'FETCH_SIGNUP_EMAIL_REQUEST',
  'FETCH_SIGNUP_EMAIL_SUCCESS',
  'FETCH_SIGNUP_EMAIL_FAILURE'
)<SIGNUPEMAIL, any, Error>();

const fetchSignInEmailAsync = createAsyncAction(
  'FETCH_SIGNIN_EMAIL_REQUEST',
  'FETCH_SIGNIN_EMAIL_SUCCESS',
  'FETCH_SIGNIN_EMAIL_FAILURE'
)<SIGNINEMAIL, any, Error>();

const actions = { fetchSignUpEmailAsync, fetchSignInEmailAsync };

export { fetchSignUpEmailAsync, fetchSignInEmailAsync };
export type AuthAction = ActionType<typeof actions>;
