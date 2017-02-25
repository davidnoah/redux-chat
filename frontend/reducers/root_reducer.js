import { combineReducers } from 'redux';
import RoomReducer from './room_reducer';

export default combineReducers({
  rooms: RoomReducer
});
