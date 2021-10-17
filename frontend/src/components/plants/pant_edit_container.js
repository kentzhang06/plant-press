import { connect } from "react-redux";
import EditPlant from "./plant_edit";
import { fetchPlants, updatePlant } from "../../actions/plant_actions"
import { fetchAllPosts } from "../../actions/post_actions";

const mapStateToProps = (state, ownProps) => ({
  plant: state.entities.plants[ownProps.match.params.plantId],
  // userId: plant.userId,
  // posts: state.entities.posts
})

const mapDispatchToProps = dispatch => ({
  fetchPlants: (userId) => dispatch(fetchPlants(userId)),
  fetchAllPosts: (keyword) => dispatch(fetchAllPosts(keyword)),
  updatePlant: (plant) => dispatch(updatePlant(plant))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPlant);