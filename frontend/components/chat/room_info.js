import React from 'react';

const RoomInfo = ({ room }) => {
  return (
    <div className='room-info-container'>
      <div className='room-info-name'>{ room.name }</div>
      <div className='user-list'>
        {room.users.map((user, idx) => (
          <div className='user-list-name' key={idx}>{user}</div>
        ))}
      </div>
    </div>
  );
};

export default RoomInfo;
