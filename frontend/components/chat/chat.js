import React from 'react';
import Directory from '../directory/directory_container';
import Messages from './messages_container';

// simple container that houses the entire chat interface
const Chat = () => {
  return (
    <div className='chat-container' >
      <Directory />
      <Messages />
    </div>
  );
};

export default Chat;
