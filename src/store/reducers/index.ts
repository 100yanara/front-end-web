import { combineReducers } from 'redux';
import counter from './counter';
import auth from './auth';

export const rootReducer = combineReducers({
  counter,
  auth,
});

export type rootState = ReturnType<typeof rootReducer>;
