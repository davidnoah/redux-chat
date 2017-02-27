import React from 'react';
import Directory from '../directory/directory_container';
import Messages from './chat_container';

const Chat = () => {
  return (
    <div className='chat-container' >
      <Directory />
      <Messages />
    </div>
  );
};

export default Chat;
