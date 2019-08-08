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
const Page1 = load(lazy(() => import('Containers/page-1/page-1')));

export const App = () => (
  <>
    <GlobalStyle />
    <Router basename={window.appSubfolder}>
      <Route path="/" exact component={Home} />
      <Route path="/page-1" exact component={Page1} />
    </Router>
  </>
);

App.propTypes = {};

export default App;
