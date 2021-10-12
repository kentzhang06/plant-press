import { RECEIVE_PLANT_REMINDERS } from "../../actions/reminder_actions";

const PlantReminderReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLANT_REMINDERS:
      return action.reminders;
    default:
      return state;
  }
}

export default PlantReminderReducer;