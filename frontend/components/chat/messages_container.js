import { connect } from 'react-redux';
import Messages from './messages';
import { fetchMessages, addMessage } from '../../actions/message_actions';
import { fetchRoom } from '../../actions/room_actions';

const mapStateToProps = state => ({
  room: state.currentRoom,
  messages: state.messages,
  user: state.user,
});

const mapDispatchToProps = dispatch => {
  return {
    fetchMessages: (id) => dispatch(fetchMessages(id)),
    addMessage: (id, message, name) => dispatch(addMessage(id, message, name)),
    fetchRoom: (id) => dispatch(fetchRoom(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
