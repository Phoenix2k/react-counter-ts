import { ActionCounter } from '../actions';
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from '../constants';
import { InterfaceStoreState } from '../types';

/** Reducer for `Counter` component. Determines whether to _decrement_ or _increment_ the current count. */
export function ReducerCounter(state: InterfaceStoreState, action: ActionCounter): InterfaceStoreState {
  switch (action.type) {
    case DECREMENT_COUNTER:
      console.debug('Decrementing...');
      return { ...state, count: Math.max(0, state.count - 1) };
    case INCREMENT_COUNTER:
      console.debug('Incrementing...');
      return { ...state, count: state.count + 1 };
  }
  return state;
}
