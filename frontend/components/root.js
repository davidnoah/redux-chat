import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from '../store';

// Components
import Directory from './directory/directory_container';

const Root = () => (
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path='/chat' component={Directory} />
    </Router>
  </Provider>
);

export default Root;
