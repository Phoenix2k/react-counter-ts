import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ActionCounter, decrementCounter, incrementCounter } from '../../actions';
import Counter from '../../components/Counter';
import { InterfaceStoreState } from '../../types';

/** Maps the state to props for the `Counter` component. */
export function mapStateToProps({
  count,
  i18n_controls,
  i18n_count,
  i18n_decrement,
  i18n_increment,
}: InterfaceStoreState) {
  return {
    count,
    i18n_controls,
    i18n_count,
    i18n_decrement,
    i18n_increment,
  };
}

/** Dispatches actions related to the `Counter` component. */
export function mapDispatchToProps(dispatch: Dispatch<ActionCounter>) {
  return {
    onDecrement: () => dispatch(decrementCounter()),
    onIncrement: () => dispatch(incrementCounter()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
