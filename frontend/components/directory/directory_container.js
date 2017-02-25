import { connect } from 'react-redux';
import Directory from './directory';
import { fetchRooms } from '../../actions/room_actions';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = state => ({
  rooms: state.rooms
});

const mapDispatchToProps = dispatch => {
  return {
    fetchRooms: dispatch(fetchRooms())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Directory);
