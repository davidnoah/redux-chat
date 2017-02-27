import * as APIUtil from '../util/message_api_util';

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

// async actions
export const fetchMessages = (id) => dispatch => (
  APIUtil.fetchMessages(id).then((messages) =>
    dispatch(receiveMessages(messages)))
);

export const addMessage = (id, message, name) => dispatch => (
  APIUtil.addMessage(id, message, name).then((message) =>
    dispatch(receiveMessage(message)))
);

// sync actions
export const receiveMessages = (messages) => ({
  type: RECEIVE_MESSAGES,
  messages
});

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message
});
