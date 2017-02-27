import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store';

document.addEventListener("DOMContentLoaded", () => {
  const rootDiv = document.getElementById("root");

  let store;
  let user = window.localStorage.getItem('_chatAppCurrentUser');
  if (user) {
    const preloadedState = { user };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
  ReactDOM.render(<Root store={store}/>, rootDiv);
});
