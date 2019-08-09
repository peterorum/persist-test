import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { Container } from 'Styles/layout';

const ImageContainer = styled.div``;

const Flex = () => (
  <Container>
    <Link to="/">
      <div className="pt-4">Home</div>
    </Link>
    <div className="d-flex flex-column">
      <h1>Flex alignment</h1>
      <div className="my-3">
        <ImageContainer>
          <div className="d-flex flex-column lg-flex-row">
            <div className="w-100 mb-4 mr-0 lg-w-66 lg-mr-4 lg-mb-0">
              <img
                className="img-responsive lg-img-height-full lg-img-cover "
                alt=""
                src="https://via.placeholder.com/2000x760/0095c5"
              />
            </div>
            <div className="d-flex flex-column w-100 lg-w-33">
              <div className="mb-4">
                <img
                  className="img-responsive"
                  alt=""
                  src="https://via.placeholder.com/2000x760/ff6633"
                />
              </div>
              <div className="mb-4 lg-mb-0">
                <img
                  className="img-responsive"
                  alt=""
                  src="https://via.placeholder.com/2000x760/3366ff"
                />
              </div>
            </div>
          </div>
        </ImageContainer>
      </div>
    </div>
  </Container>
);

export default Flex;
