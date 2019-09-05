import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '@babel/polyfill';

import 'sanitize.css';
import 'Styles/css-utilities.css';

import { GlobalStyle } from 'Styles/global-styles';

const load = Component => props => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component {...props} />
  </Suspense>
);

const Home = load(lazy(() => import('Containers/home/home')));
const Persist = load(lazy(() => import('Containers/persist/persist')));
const Flex = load(lazy(() => import('Containers/flex/flex')));

export const App = () => (
  <>
    <GlobalStyle />
    <Router basename={window.appSubfolder}>
      <Route path="/" exact component={Home} />
      <Route path="/persist" exact component={Persist} />
      <Route path="/flex" exact component={Flex} />
    </Router>
  </>
);

App.propTypes = {};

export default App;
