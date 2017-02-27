import { connect } from 'react-redux';
import Login from './login';
import { receiveCurrentUser } from '../../actions/user_actions';

const mapStateToProps = state => ({
  currentUser: state.user
});

const mapDispatchToProps = dispatch => ({
  loginUser: (user) => dispatch(receiveCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
