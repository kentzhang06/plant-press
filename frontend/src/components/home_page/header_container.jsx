import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Header } from './header';

const mSTP = (state, ownProps) => ({
  user: state.session.user,
});

export default withRouter(connect(mSTP, null)(Header));
