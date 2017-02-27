import { ajax } from 'jquery';

export const fetchRooms = () => {
  return ajax({
    url: 'http://localhost:8080/api/rooms',
    error: (err) => console.log(err)
  });
};

export const fetchRoom = (id) => {
  return ajax({
    url: 'http://localhost:8080/api/rooms/' + id,
    error: (err) => console.log(err)
  });
};
