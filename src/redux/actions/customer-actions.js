export const CUSTOMER_SET_FIRSTNAME = 'CUSTOMER_SET_FIRSTNAME';
export const CUSTOMER_SET_LASTNAME = 'CUSTOMER_SET_LASTNAME';

// actions


export const setFirstName = ({ firstName }) => ({
  type: CUSTOMER_SET_FIRSTNAME,
  firstName,
});

export const setLastName = ({ lastName }) => ({
  type: CUSTOMER_SET_LASTNAME,
  lastName,
});

