import { RECEIVE_ROOMS } from '../actions/room_actions';

import { merge } from 'lodash';

const RoomReducer = (state = {}, action) => {
  Object.freeze(state);
  let newSatte = merge({}, state);

  switch(action.type) {
    case RECEIVE_ROOMS:
      return action.rooms;
    default:
      return state;
  }
};

export default RoomReducer;
