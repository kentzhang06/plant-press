import { combineReducers } from "redux"

const RemindersReducer = combineReducers({
  myReminders: MyRemindersReducer,
  plantReminder: PlantReminderReducer
})

export default RemindersReducer;