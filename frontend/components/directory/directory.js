import React from 'react';
import { isEmpty, bindAll } from 'lodash';

// Components
import Room from './room';
import UserItem from './user_item.js';

const Directory = ({ rooms }) => {

  const _roomsList = isEmpty(rooms) ? [] : rooms;

  return (
    <div id='directory'>
      <UserItem />
      <div className='room-list'>
        {_roomsList.map(room => (
          <Room room={room} key={room.id} />
        ))}
      </div>
    </div>
  );
}

export default Directory;
