import { connect } from "react-redux";
import PlantCollection from "./plant_collection";
import { fetchPlants } from "../../actions/plant_actions"
import { fetchAllPosts } from "../../actions/post_actions";
import { fetchUser } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  userId: ownProps.match.params.userId,
  userPlants: Object.values(state.entities.plants),
  posts: state.entities.posts,
  currentUserId: state.session.user.id,
  user: state.entities.fetchedUser[ownProps.match.params.userId]
})

const mapDispatchToProps = dispatch => ({
  fetchPlants: (userId) => dispatch(fetchPlants(userId)),
  fetchAllPosts: (keyword) => dispatch(fetchAllPosts(keyword)),
  fetchUser: userId => dispatch(fetchUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PlantCollection);