import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from 'Styles/layout';

const Home = () => (
  <Container>
    <h1 className="pt-4">Home</h1>
    <div className="d-flex flex-column">
      <Link to="/persist">Name entry</Link>
      <Link to="/flex">Flex alignment</Link>
    </div>
  </Container>
);

export default Home;
