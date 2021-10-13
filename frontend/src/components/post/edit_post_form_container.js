import { connect } from 'react-redux';
import { updatePost } from '../../actions/post_actions';
import PostForm from './post_form';


const mapStateToProps = (state) => {
  return {
    formType: 'Update Post',
    errors: state.errors.postErrors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePost: (post) => dispatch(updatePost(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);