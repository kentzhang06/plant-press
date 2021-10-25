import { connect } from "react-redux";
import { deletePost, fetchPlantPosts } from "../../actions/post_actions";
import {
  followPlant,
  fetchFollows,
  unfollowPlant,
} from "../../actions/follow_actions";
import { fetchPlant } from "../../actions/plant_actions"
import PlantPosts from "./plant_posts";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUserId: state.session.user.id,
    posts: Object.values(state.entities.posts),
    follows: Object.keys(state.entities.follows),
    plant: state.entities.plants[ownProps.match.params.plantId]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlantPosts: (plantId) => dispatch(fetchPlantPosts(plantId)),
    deletePost: (postId) => dispatch(deletePost(postId)),
    followPlant: (plantId) => dispatch(followPlant(plantId)),
    unfollowPlant: (plantId) => dispatch(unfollowPlant(plantId)),
    fetchFollows: () => dispatch(fetchFollows()),
    fetchPlant: (plantId) => dispatch(fetchPlant(plantId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlantPosts);
