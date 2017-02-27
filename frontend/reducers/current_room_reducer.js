import { RECEIVE_ROOM } from '../actions/room_actions';

import { merge } from 'lodash';

const CurrentRoomReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ROOM:
      let newState = merge({}, state, action.room);
      newState.users = action.room.users;
      return newState;
    default:
      return state;
  }
};

export default CurrentRoomReducer;
