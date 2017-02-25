import * as APIUtil from '../util/room_api_util';

export const FETCH_ROOMS = "FETCH_ROOMS";
export const RECEIVE_ROOMS = "RECEIVE_ROOMS";

export const fetchRooms = () => dispatch => (
  APIUtil.fetchRooms().then(
    rooms => dispatch( receiveRooms(rooms) ))
);

export const receiveRooms = rooms => ({
  type: RECEIVE_ROOMS,
  rooms
});
