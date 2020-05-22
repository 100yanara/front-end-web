import { ActionType, createAction } from 'typesafe-actions';

export const INCREASE = 'counter/INCREASE';
export const DECREASE = 'counter/DECREASE';
export const INCREASE_BY = 'counter/INCREASE_BY';

export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();
export const increaseBy = createAction(INCREASE_BY)<number>();

const actions = { increase, decrease, increaseBy };

export type CounterAction = ActionType<typeof actions>;
