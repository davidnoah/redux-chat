import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from '../actions/message_actions';

import { merge } from 'lodash'

const MessageReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_MESSAGES:
      return action.messages;
    case RECEIVE_MESSAGE:
      let newState = state.slice(0);
      newState.push(action.message);
      return newState;
    default:
      return state;
  }
};

export default MessageReducer;
