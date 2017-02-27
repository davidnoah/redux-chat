import * as APIUtil from '../util/room_api_util';

export const FETCH_ROOMS = "FETCH_ROOMS";
export const RECEIVE_ROOMS = "RECEIVE_ROOMS";
export const RECEIVE_ROOM = "RECEIVE_ROOM";

// async actions
export const fetchRooms = () => dispatch => (
  APIUtil.fetchRooms().then(
    rooms => dispatch(receiveRooms(rooms)))
);

export const fetchRoom = (id) => dispatch => {
  return APIUtil.fetchRoom(id).then(
    room => dispatch(receiveRoom(room)));
};

// sync actions
export const receiveRooms = rooms => ({
  type: RECEIVE_ROOMS,
  rooms
});

export const receiveRoom = room => ({
  type: RECEIVE_ROOM,
  room
});
