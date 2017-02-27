import { connect } from 'react-redux';
import Directory from './directory';
import { fetchRooms, fetchRoom } from '../../actions/room_actions';
import { fetchMessages } from '../../actions/message_actions';

const mapStateToProps = state => ({
  rooms: state.rooms,
  user: state.user
});

const mapDispatchToProps = dispatch => {
  return {
    fetchRoom: (id) => dispatch(fetchRoom(id)),
    fetchMessages: (id) => dispatch(fetchMessages(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Directory);
