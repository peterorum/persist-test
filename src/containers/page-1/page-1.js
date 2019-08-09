import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import { Container } from 'Styles/layout';

import { setFirstName, setLastName } from 'Redux/actions/customer-actions';

import { makeCustomerSelector } from 'Redux/selectors/customer-selectors';

const Page1 = () => {
  const dispatch = useDispatch();

  const customer = useSelector(makeCustomerSelector);

  return (
    <Container>
      <Link to="/">
        <div className="pt-4">Home</div>
      </Link>
      <div className="d-flex flex-column">
        <h1>Page 1</h1>
        <div className="my-3">
          First name:{' '}
          <input
            type="text"
            value={customer.name.firstName}
            onChange={e =>
              dispatch(setFirstName({ firstName: e.currentTarget.value }))
            }
          />
        </div>
        <div className="my-3">
          Last name:{' '}
          <input
            type="text"
            value={customer.name.lastName}
            onChange={e =>
              dispatch(setLastName({ lastName: e.currentTarget.value }))
            }
          />
        </div>
      </div>
    </Container>
  );
};

export default Page1;
