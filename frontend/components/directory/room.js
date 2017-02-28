import React from 'react';

// steless Component to display a room name
const Room = ({ room, id }) => {
  return (
    <div className='room' id={id}>
      <div className='room-name' id={id}>
        { room.name }
      </div>
    </div>
  );
};

export default Room;
