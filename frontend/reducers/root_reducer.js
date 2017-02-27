import { combineReducers } from 'redux';
import RoomReducer from './room_reducer';
import UserReducer from './user_reducer';
import MessageReducer from './message_reducer';
import CurrentRoomReducer from './current_room_reducer';

export default combineReducers({
  user: UserReducer,
  rooms: RoomReducer,
  currentRoom: CurrentRoomReducer,
  messages: MessageReducer
});
