import { connect } from 'react-redux';
import { createPost, clearPostErrors } from '../../actions/post_actions';
import PostForm from './post_form';


const mapStateToProps = (state) => {
  return {
    formType: 'Create Post',
    errors: state.errors.postErrors,
    currentUserId: state.session.user.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    formAction: (post) => dispatch(createPost(post)),
    clearPostErrors: () => dispatch(clearPostErrors())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);