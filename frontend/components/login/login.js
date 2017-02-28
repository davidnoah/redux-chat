import React from 'react';
import { withRouter } from 'react-router';
import { bindAll, capitalize } from 'lodash';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
    bindAll(this, '_handleChange', '_login', '_handleKeyPress');
  }

// allows login on key enter
  _handleKeyPress(event) {
    if (event.key === "Enter") {
      this._login();
    }
  }

// dispatches the login action and redirects to chat interface
  _login() {
    this.props.loginUser(capitalize(this.state.user));
    this.props.router.push('/chat');
  }

// save input field string in component state
  _handleChange(event) {
    let state = {};
    state[event.target.id] = event.target.value;
    this.setState(state);
  }

  render() {
    return (
      <div className='login-page'>
        <input className='login-textbox' maxLength={20} type='text' id='user' onKeyPress={this._handleKeyPress} onChange={this._handleChange} placeholder='Type in your username...'/>
        <button className='login-button' onClick={this._login}>Launch Chat</button>
      </div>
    );
  }
}

module.exports = withRouter(Login);
