import { connect } from "react-redux";
import PlantCollection from "./plant_collection";
import { fetchPlants } from "../../actions/plant_actions"

const mapStateToProps = (state, ownProps) => ({
  userId: ownProps.match.params.userId,
  userPlants: Object.values(state.entities.plants)
})

const mapDispatchToProps = dispatch => ({
  fetchPlants: (userId) => dispatch(fetchPlants(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PlantCollection);