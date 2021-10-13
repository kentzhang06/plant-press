import { connect } from "react-redux";
import PlantDetails from "./plant_details"
import { fetchPlant } from "../../actions/plant_actions"
import { fetchPlantReminder } from "../../actions/reminder_actions"

const mapStateToProps = (state, ownProps) => ({
  plantId: ownProps.match.params.plantId,
  plant: state.entities.plants[ownProps.match.params.plantId],
  reminders: state.entities.reminders.plantReminder
})

const mapDispatchToProps = dispatch => ({
  fetchPlant: (plantId) => dispatch(fetchPlant(plantId)),
  fetchReminders: (plantId) => dispatch(fetchPlantReminder(plantId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PlantDetails);