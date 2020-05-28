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

export type UPDATEUSER = {
  userCredential: firebase.auth.UserCredential;
  displayName: string;
};

const fetchSignUpEmailAsync = createAsyncAction(
  'FETCH_SIGNUP_EMAIL_REQUEST',
  'FETCH_SIGNUP_EMAIL_SUCCESS',
  'FETCH_SIGNUP_EMAIL_FAILURE'
)<SIGNUPEMAIL, string, string>();

const fetchSignInEmailAsync = createAsyncAction(
  'FETCH_SIGNIN_EMAIL_REQUEST',
  'FETCH_SIGNIN_EMAIL_SUCCESS',
  'FETCH_SIGNIN_EMAIL_FAILURE'
)<SIGNINEMAIL, null, Error>();

const fetchGetCurrentUserAsync = createAsyncAction(
  'FETCH_GET_CURRENT_USER_REQUEST',
  'FETCH_GET_CURRENT_USER_SUCCESS',
  'FETCH_GET_CURRENT_USER_FAILURE'
)<null, any, Error>();

const fetchUpdateUserAsync = createAsyncAction(
  'FETCH_UPDATE_USER_REQUEST',
  'FETCH_UPDATE_USER_SUCCESS',
  'FETCH_UPDATE_USER_FAILURE'
)<UPDATEUSER, any, Error>();

const fetchSignOutAsync = createAsyncAction(
  'FETCH_SIGN_OUT_REQUEST',
  'FETCH_SIGN_OUT_SUCCESS',
  'FETCH_SIGN_OUT_FAILURE'
)<null, null, Error>();

const fetchOnAuthStateChangeAsync = createAsyncAction(
  'FETCH_ON_AUTH_STATE_CHANGE_REQUEST',
  'FETCH_ON_AUTH_STATE_CHANGE_SUCCESS',
  'FETCH_ON_AUTH_STATE_CHANGE_FAILURE'
)<null, firebase.auth.UserCredential, Error>();

const actions = {
  fetchSignUpEmailAsync,
  fetchSignInEmailAsync,
  fetchGetCurrentUserAsync,
  fetchUpdateUserAsync,
  fetchSignOutAsync,
  fetchOnAuthStateChangeAsync,
};

export {
  fetchSignUpEmailAsync,
  fetchSignInEmailAsync,
  fetchGetCurrentUserAsync,
  fetchUpdateUserAsync,
  fetchSignOutAsync,
  fetchOnAuthStateChangeAsync,
};

export type AuthAction = ActionType<typeof actions>;
