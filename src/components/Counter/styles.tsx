import styled from 'styled-components';
import {
  DEFAULT_COUNTER_BUTTON_HIGHLIGHT_COLOR,
  DEFAULT_COUNTER_BUTTON_HIGHLIGHT_TEXT_COLOR,
  DEFAULT_COUNTER_VALUE_SELECTION_COLOR,
  DEFAULT_COUNTER_VALUE_TEXT_COLOR
} from './defaults';

export const Button = styled.button`
  background: transparent;
  border: 0;
  color: var(--counter-button-highlight-color, ${DEFAULT_COUNTER_BUTTON_HIGHLIGHT_COLOR});
  font-size: calc(1em + 1vmin);
  outline-color: var(--counter-button-highlight-color, ${DEFAULT_COUNTER_BUTTON_HIGHLIGHT_COLOR});
  padding: 1em;
  transition: background 0.2s ease-out;
  user-select: none;
  will-change: background;
  -webkit-tap-highlight-color: var(
    --counter-button-highlight-color,
    ${DEFAULT_COUNTER_BUTTON_HIGHLIGHT_COLOR}
  );

  &:active {
    background-color: var(
      --counter-button-highlight-color,
      ${DEFAULT_COUNTER_BUTTON_HIGHLIGHT_COLOR}
    );
    color: var(
      --counter-button-highlight-text-color,
      ${DEFAULT_COUNTER_BUTTON_HIGHLIGHT_TEXT_COLOR}
    );
  }

  & + button {
    margin-left: 1em;
  }
`;

export const CounterValue = styled.input`
  background: transparent;
  border: 0;
  color: var(--counter-value-text-color, ${DEFAULT_COUNTER_VALUE_TEXT_COLOR});
  display: inline-block;
  font-size: 20vmin;
  margin: 0 0 2rem;
  outline: 0;
  padding: 0;
  text-align: inherit;
  width: 100%;

  &::selection {
    background: var(--counter-value-selection-color, ${DEFAULT_COUNTER_VALUE_SELECTION_COLOR});
  }

  @media (orientation: landscape) {
    margin: 1rem auto;
  }
`;

export const CounterWrapper = styled.div``;

export const CounterIcon = styled.svg`
  align-items: center;
  display: inline-flex;
  fill: currentColor;
  height: calc(1em + 1vmin);
  justify-content: center;
  stroke-width: 0;
  stroke: currentColor;
  width: calc(1em + 1vmin);
`;
