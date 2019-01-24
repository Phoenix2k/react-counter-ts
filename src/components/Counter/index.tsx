import React from 'react';
import { Button, CounterIcon, CounterValue, CounterWrapper } from './styles';

export interface InterfaceCounterProps {
  /** Current number value of the counter. */
  count?: number;
  /** Aria label for button controls. */
  i18n_controls?: string;
  /** Aria label for the field showing the current count. */
  i18n_count?: string;
  /** Button text for decrementing the counter value. */
  i18n_decrement?: string;
  /** Button text for incrementing the counter value. */
  i18n_increment?: string;
  /** Decrements the current count. */
  onDecrement?: () => any;
  /** Increments the current count. */
  onIncrement?: () => any;
}

/** The `Counter` component. */
function Counter({
  count = 0,
  i18n_controls,
  i18n_count,
  i18n_decrement,
  i18n_increment,
  onDecrement,
  onIncrement,
}: InterfaceCounterProps) {
  if (count < 0) {
    throw new Error('Count should not be negative.');
  }
  return (
    <CounterWrapper>
      <CounterValue
        aria-label={i18n_count}
        className="counter-value"
        name="counter-value"
        pattern="[0-9]*"
        readOnly={true}
        role="status"
        type="number"
        value={count}
      />
      <div aria-label={i18n_controls} role="group">
        <Button className="counter-button" onClick={onDecrement}>
          <CounterIcon className="counter-icon-minus" viewBox="0 0 32 32">
            <title>{i18n_decrement}</title>
            <path d="M0 13v6c0 0.552 0.448 1 1 1h30c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1h-30c-0.552 0-1 0.448-1 1z" />
          </CounterIcon>
        </Button>
        <Button className="counter-button" onClick={onIncrement}>
          <CounterIcon className="counter-icon-plus" viewBox="0 0 32 32">
            <title>{i18n_increment}</title>
            <path d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z" />
          </CounterIcon>
        </Button>
      </div>
    </CounterWrapper>
  );
}

export default Counter;
