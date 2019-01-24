import { createStore } from 'redux';
import { ActionCounter } from '../store/actions';
import { ReducerCounter } from '../store/reducers';
import { InterfaceStoreState } from '../types';

/** Contains the default keys and values for the store. */
export const store = createStore<InterfaceStoreState, ActionCounter, any, any>(ReducerCounter, {
  count: 0,
  i18n_controls: 'Controls',
  i18n_count: 'Count',
  i18n_decrement: 'Decrement',
  i18n_increment: 'Increment',
});
