import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from 'Styles/layout';

const Home = () => (
  <Container>
    <h1 className="pt-4">Home</h1>
    <Link to="/page-1">Name entry</Link>
  </Container>
);

export default Home;
