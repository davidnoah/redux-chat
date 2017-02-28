import React from 'react';
import { isEmpty, bindAll } from 'lodash';

// Components
import Room from './room';
import UserItem from './user_item.js';

const Directory = ({ rooms, fetchRoom, user, fetchMessages }) => {

// changes the current room and acquires it's data
  const _handleClick = (e) => {
    let roomId = e.target.id;
    if (roomId) {
      fetchRoom(roomId)
        .then(fetchMessages(roomId))
          .then(_scroll());
    }

  }

// Ensures the message log scrolls when a new chat room is entered
  const _scroll = () => {
    let log = document.getElementById('log');
    log.scrollTop = log.scrollHeight;
  }

  return (
    <div id='directory'>
      <UserItem user={user} />
      <div className='room-list' onClick={_handleClick}>
        {rooms.map(room => (
          <Room room={room} id={room.id} key={room.id} />
        ))}
      </div>
    </div>
  )
}

export default Directory;
