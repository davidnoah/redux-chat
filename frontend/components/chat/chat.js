import React from 'react';
import Directory from '../directory/directory_container';
import Messages from './messages_container';

const Chat = () => {
  return (
    <div className='chat-container' >
      <Directory />
      <Messages />
    </div>
  );
};

export default Chat;
