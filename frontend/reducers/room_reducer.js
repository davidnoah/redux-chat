import { RECEIVE_ROOMS, RECEIVE_ROOM } from '../actions/room_actions';

import { merge } from 'lodash';

const _defaultState = {
  roomsList: [],
  currentRoom: {}
};

const RoomReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ROOMS:
      return merge({}, state, {
        roomsList: action.rooms
      });
    case RECEIVE_ROOM:
      let newState = merge({}, state, {
        currentRoom: action.room
      });
      newState.currentRoom.users = action.room.users;
      return newState;
    default:
      return state;
  }
};

export default RoomReducer;
