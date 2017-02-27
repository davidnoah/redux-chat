import React from 'react';
import { Router, Route, IndexRoute, browserHistory, RouterContext, push } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from '../store';

// Components
import Login from './login/login_container';
import Chat from './chat/chat.js';

// Actions
import { fetchRoom, fetchRooms } from '../actions/room_actions';
import { fetchMessages } from '../actions/message_actions';

const Root = ({ store }) => {

  const ensureLogin = (nextState, replace, cb) => {
    if (!store.getState().user) {
      replace('/');
    } else {
      store.dispatch(fetchRoom(0))
        .then(store.dispatch(fetchRooms()))
          .then(store.dispatch(fetchMessages(0)))
            .then(() => cb())
    }
  };

  return (
    <Provider store={store}>
      <Router history={browserHistory} >
        <Route path='/' component={Login} />
        <Route path='/chat' component={Chat} onEnter={ensureLogin} />
      </Router>
    </Provider>
  )
};

export default Root;
