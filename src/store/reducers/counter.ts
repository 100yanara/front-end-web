import { createReducer } from 'typesafe-actions';
import {
  CounterAction,
  INCREASE,
  INCREASE_BY,
  DECREASE,
} from 'store/actions/counter';

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

const counter = createReducer<CounterState, CounterAction>(initialState, {
  [INCREASE]: state => ({ count: state.count + 1 }),
  [DECREASE]: state => ({ count: state.count - 1 }),
  [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }),
});

export default counter;
