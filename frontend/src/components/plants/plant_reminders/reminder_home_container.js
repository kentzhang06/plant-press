import { updateReminder } from '../../../actions/reminder_actions'
import { connect } from 'react-redux'
import RemindersHomePage from './reminder_home'

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.user,
  plant: state.entities.plants[ownProps.reminder.plantId]
})

const mapDispatchToProps = dispatch => ({
  updateReminder: (reminder) => dispatch(updateReminder(reminder))
})

export default connect(mapStateToProps, mapDispatchToProps)(RemindersHomePage)