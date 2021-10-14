import { connect } from 'react-redux';
import { updateReminder, fetchMyReminders,fetchPlantReminder, deletePlantReminder } from '../../../actions/reminder_actions';
import EditReminder from './edit_reminder';

const mapStateToProps = (state, ownProps) => ({
  currentUserId: state.session.user.id,
  plantId: ownProps.match.params.plantId,
  errors: state.errors.reminderErrors,
  reminder: state.entities.reminders.plantReminder[ownProps.match.params.reminderId]
})


const mapDispatchToProps = dispatch => ({
  updateReminder: reminder => dispatch(updateReminder(reminder)),
  fetchMyReminders: () => dispatch(fetchMyReminders()),
  fetchPlantReminder: plantId => dispatch(fetchPlantReminder(plantId)),
  deletePlantReminder: reminderId => dispatch(deletePlantReminder(reminderId))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditReminder);