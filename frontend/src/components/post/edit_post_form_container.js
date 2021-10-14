import { connect } from 'react-redux';
import { updatePost, fetchPlantPosts } from '../../actions/post_actions';
import PostForm from './post_form';


const mapStateToProps = (state, ownProps) => {
  return {
    formType: 'Update Post',
    errors: state.errors.postErrors,
    post: state.entities.posts[ownProps.match.params.postId]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlantPosts: (plantId) => dispatch(fetchPlantPosts(plantId)),
    formAction: (post) => dispatch(updatePost(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);