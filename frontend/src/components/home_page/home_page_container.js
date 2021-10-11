import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import HomePage from './home_page';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: user => dispatch(logout(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);