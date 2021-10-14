import { RECEIVE_PLANT_REMINDERS, RECEIVE_REMINDER, REMOVE_REMINDER } from "../../actions/reminder_actions";

const PlantReminderReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_PLANT_REMINDERS:
      action.reminders.forEach(reminder => {
        newState[reminder._id] = reminder;
      });
      return newState;
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

export default PlantReminderReducer;