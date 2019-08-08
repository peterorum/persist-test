import { createSelector } from 'reselect';

const getCustomer = state => state.customer;

export const makeCustomerSelector = createSelector(
  [getCustomer],
  customerState => customerState,
);
