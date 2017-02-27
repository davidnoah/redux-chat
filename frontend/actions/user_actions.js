export const LOGIN_USER = 'LOGIN_USER';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});
