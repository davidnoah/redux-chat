import React from 'react';
import Directory from '../directory/directory_container';
import Messages from './messages.js';

const Chat = ({ currentRoom, messages, addMessage, user, fetchRoom }) => {
  return (
    <div className='chat-container' >
      <Directory />
      <Messages user={user}
        room={currentRoom}
        messages={messages}
        addMessage={addMessage}
        fetchRoom={fetchRoom}
      />
    </div>
  );
};

export default Chat;
