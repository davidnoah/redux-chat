import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root_reducer';
import enhancers from './middleware/enhancers';

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    enhancers
  )
);

export default configureStore;
