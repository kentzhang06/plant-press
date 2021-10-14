import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
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
    formAction: (post) => dispatch(createPost(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);