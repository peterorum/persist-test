import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';

import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import throttle from 'lodash/throttle';

import rootReducer from 'Redux/reducers';

import App from 'Components/app/app';

import './index.css';

import { loadState, saveState } from 'Redux/persist/persist';

/* eslint-disable no-underscore-dangle */

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

/* eslint-enable */

const enhancer = composeEnhancers();
// other store enhancers if any

const persistedState = loadState();

export const store = createStore(rootReducer, persistedState, enhancer);

store.subscribe(
  throttle(() => {
    // only save specified states
    const { customer } = store.getState();

    saveState({
      customer,
    });
  }, 1000),
);

// hot module replacement

if (module.hot) {
  module.hot.accept('Redux/reducers', () => {
    store.replaceReducer(rootReducer);
  });
}

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
};

render();

if (module.hot) {
  module.hot.accept('./components/app/app', () => {
    render();
  });
}
