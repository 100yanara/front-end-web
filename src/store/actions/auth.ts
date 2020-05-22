import { ActionType, createAsyncAction } from 'typesafe-actions';

export type SIGNUPEMAIL = {
  name: string;
  email: string;
  password: string;
};

const fetchSignUpEmailAsync = createAsyncAction(
  'FETCH_SIGNUP_EMAIL_REQUEST',
  'FETCH_SIGNUP_EMAIL_SUCCESS',
  'FETCH_SIGNUP_EMAIL_FAILURE'
)<SIGNUPEMAIL, any, Error>();

const actions = { fetchSignUpEmailAsync };

export { fetchSignUpEmailAsync };
export type AuthAction = ActionType<typeof actions>;
