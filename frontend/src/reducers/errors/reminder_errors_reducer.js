import {
  RECEIVE_REMINDER_ERRORS,
  RECEIVE_REMINDER,
} from "../../actions/reminder_actions";

const ReminderErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_REMINDER_ERRORS:
      return action.errors;
    case RECEIVE_REMINDER:
      return [];
    default:
      return state;
  }
};

export default ReminderErrorsReducer;
