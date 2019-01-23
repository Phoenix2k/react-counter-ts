import * as constants from '../constants';

/** Counter decrement interface. */
export interface InterfaceDecrementCounter {
  /** Counter decrement type. */
  type: constants.DECREMENT_COUNTER;
}

/** Counter increment interface. */
export interface InterfaceIncrementCounter {
  /** Counter increment type. */
  type: constants.INCREMENT_COUNTER;
}

/** Counter action type. */
export type ActionCounter = InterfaceDecrementCounter | InterfaceIncrementCounter;

/** Counter decrement action. */
export function decrementCounter(): InterfaceDecrementCounter {
  return {
    /** Counter decrement type. */
    type: constants.DECREMENT_COUNTER,
  };
}

/** Counter increment action. */
export function incrementCounter(): InterfaceIncrementCounter {
  return {
    /** Counter increment type. */
    type: constants.INCREMENT_COUNTER,
  };
}
