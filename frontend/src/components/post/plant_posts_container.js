import { connect } from 'react-redux';
import { deletePost, fetchPlantPosts } from '../../actions/post_actions';
import { followPlant, fetchFollows, unfollowPlant } from '../../actions/follow_actions';

import PlantPosts from './plant_posts';

const mapStateToProps = (state) => {
  return {
    currentUserId: state.session.user.id,
    posts: Object.values(state.entities.posts),
    follows: Object.keys(state.entities.follows)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlantPosts: (plantId) => dispatch(fetchPlantPosts(plantId)),
    deletePost: (postId) => dispatch(deletePost(postId)),
    followPlant: (plantId) => dispatch(followPlant(plantId)),
    unfollowPlant: (plantId) => dispatch(unfollowPlant(plantId)),
    fetchFollows: () => dispatch(fetchFollows()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlantPosts);