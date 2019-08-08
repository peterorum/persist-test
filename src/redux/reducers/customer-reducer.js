import { produce } from 'immer';

import {
  CUSTOMER_SET_FIRSTNAME,
  CUSTOMER_SET_LASTNAME,
} from 'Redux/actions/customer-actions';


const initialState = {
  firstName: '',
  lastName: '',
};

export const customerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CUSTOMER_SET_FIRSTNAME: {
        draft.firstName = action.firstName;

        break;
      }

      case CUSTOMER_SET_LASTNAME: {
        draft.lastName = action.lastName;

        break;
      }


      default:
        break;
    }
  });
