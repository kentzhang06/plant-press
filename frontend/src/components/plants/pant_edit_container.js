import { connect } from "react-redux";
import PlantCollection from "./plant_collection";
import { fetchPlants } from "../../actions/plant_actions"
import { fetchAllPosts } from "../../actions/post_actions";

const mapStateToProps = (state, ownProps) => ({
  userId: ownProps.match.params.userId,
  userPlants: Object.values(state.entities.plants),
  posts: state.entities.posts
})

const mapDispatchToProps = dispatch => ({
  fetchPlants: (userId) => dispatch(fetchPlants(userId)),
  fetchAllPosts: (keyword) => dispatch(fetchAllPosts(keyword))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPlant);