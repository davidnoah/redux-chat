import React from 'react';

const Room = ({ room }) => {
  return (
    <div className='room'>
      <div className='room-name'>
        { room.name }
      </div>
    </div>
  );
};

export default Room;
