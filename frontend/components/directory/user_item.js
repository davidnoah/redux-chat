import React from 'react';

class UserItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 'less than 1',
      tickId: null
    };
    this._tick = this._tick.bind(this);
  }

  componentDidMount() {
    let tickId = setInterval(this._tick, 60000);
    this.setState({tickId: tickId});
  }

  componentWillUnmount() {
    clearInterval(this.state.tickId);
  }

  _tick() {
    if (this.state.minutes === 'less than 1') {
      this.setState({
        minutes: 1
      });
    } else {
      this.setState({
        minutes: this.state.minutes + 1
      });
    }
  }

  render() {
    return (
      <div className='user-container'>
      <div id='user-name'>{ this.props.user }</div>
      <div id='user-duration'>
        <i className="fa fa-circle"></i>Online for {this.state.minutes} minute(s)
      </div>
      </div>
    );
  }
}

export default UserItem;
