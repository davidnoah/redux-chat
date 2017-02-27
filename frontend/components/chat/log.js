import React from 'react';

const Log = ({ messages, user }) => {

  const _renderMessages = () => {
    return (messages.map((m, idx) => {
      if (m.name === user) {
        return _renderActive(m, idx);
      } else {
        return _renderInactive(m, idx);
      }
    }))
  }

  const _renderInactive = (m, idx) => (
    <div key={idx} className='message-item'>
              <div className='author-message-container'>
                <div className='message'>{m.message}</div>
                <div className='message-author'>{m.name}</div>
              </div>
            </div>
  )

  const _renderActive = (m, idx) => (
    <div key={idx} className={'message-item active'}>
              <div className='author-message-container'>
                <div className='active-message message'>{m.message}</div>
                <div className='active-author message-author'>{m.name}</div>
              </div>
            </div>
  )

  return (
    <div className='message-log' id='log'>
      {_renderMessages()}
    </div>
  );
};

export default Log;
