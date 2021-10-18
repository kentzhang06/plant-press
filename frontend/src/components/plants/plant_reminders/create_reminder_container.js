import { connect } from "react-redux";
import { createReminder } from "../../../actions/reminder_actions";
import CreateReminder from "./create_reminder";

const mapStateToProps = (state, ownProps) => ({
  currentUserId: state.session.user.id,
  plantId: ownProps.match.params.plantId,
  errors: state.errors.reminderErrors,
});

const mapDispatchToProps = (dispatch) => ({
  createReminder: (reminder) => dispatch(createReminder(reminder)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateReminder);
