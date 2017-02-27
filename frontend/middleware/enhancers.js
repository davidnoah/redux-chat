import { compose, applyMiddleware } from 'redux';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';

const enhancers = compose(
  applyMiddleware(thunk),
  persistState('user', {key: '_chatAppCurrentUser'})
);

export default enhancers;
