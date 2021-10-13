import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Footer } from './footer';

const mSTP = (state, ownProps) => ({
  userId: state.session.user.id,
});

// const mDTP = dispatch => ({

// });

export default withRouter(connect(mSTP, null)(Footer));