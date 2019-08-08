import { combineReducers } from 'redux';

import { customerReducer } from './customer-reducer';

const reducers = combineReducers({
  customer: customerReducer,
});

export default reducers;
