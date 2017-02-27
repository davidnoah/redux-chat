import { ajax } from 'jquery';

export const fetchMessages = (id) => {
  return ajax({
    url: 'http://localhost:8080/api/rooms/' + id + '/messages',
    error: (err) => console.log(err)
  });
};

export const addMessage = (id, message, name) => {
  return ajax({
    url: 'http://localhost:8080/api/rooms/' + id + '/messages',
    method: 'POST',
    data: {
      name: name,
      message: message
    }
  });
};
