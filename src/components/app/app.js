import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '@babel/polyfill';

import 'sanitize.css';

import { GlobalStyle } from 'Styles/global-styles';

const load = Component => props => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component {...props} />
  </Suspense>
);

const Home = load(lazy(() => import('Containers/home/home')));

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router basename={window.appSubfolder}>
        <Route path="/" exact component={Home} />
      </Router>
    </>
  );
};

App.propTypes = {};

export default App;
