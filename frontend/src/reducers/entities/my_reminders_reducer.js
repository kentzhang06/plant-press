import { RECEIVE_MY_REMINDERS, RECEIVE_REMINDER, REMOVE_REMINDER } from "../../actions/reminder_actions";

const MyRemindersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_MY_REMINDERS:
      let nextState = {};
      action.reminders.forEach(reminder => {
        nextState[reminder._id] = reminder
      })
      return nextState;
    case RECEIVE_REMINDER:
      newState[action.reminder._id] = action.reminder;
      return newState;
    case REMOVE_REMINDER:
      delete newState[action.reminderId];
      return newState;
    default:
      return state;
  }
}

export default MyRemindersReducer;