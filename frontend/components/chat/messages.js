import React from 'react';
import Log from './log';
import RoomInfo from './room_info';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this._handleEnter = this._handleEnter.bind(this);
  }

  componentDidMount() {
    this._scroll();
  }

  componentDidUpdate() {
    this._scroll();
  }

  _handleEnter(event) {
    let props = this.props;
    if (event.key == 'Enter') {
      this.props.addMessage(props.room.id, event.target.value, props.user)
      event.target.value = "";
      this.props.fetchRoom(props.room.id);
    }
  }

  _scroll() {
    let log = document.getElementById('log');
    log.scrollTop = log.scrollHeight;
  }

  render() {
    return (
      <div className='message-container'>
        <RoomInfo room={this.props.room} />
        <Log messages={this.props.messages} user={this.props.user}/>
        <div className='message-field'>
          <input className='message-text' placeholder='Type your message here...' onKeyPress={this._handleEnter} type='text' />
        </div>
      </div>
    );
  }
}

module.exports = Messages;
