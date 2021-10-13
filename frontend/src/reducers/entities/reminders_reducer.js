import { combineReducers } from "redux"
import MyRemindersReducer from "./my_reminders_reducer";
import PlantReminderReducer from "./plant_reminders_reducer"

const RemindersReducer = combineReducers({
  myReminders: MyRemindersReducer,
  plantReminder: PlantReminderReducer
})

export default RemindersReducer;