import { combineReducers } from 'redux';
import RoomReducer from './room_reducer';
import UserReducer from './user_reducer';
import MessageReducer from './message_reducer';

export default combineReducers({
  user: UserReducer,
  rooms: RoomReducer,
  messages: MessageReducer
});
