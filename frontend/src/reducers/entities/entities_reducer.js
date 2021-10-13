import { combineReducers } from "redux";
import PlantsReducer from "./plants_reducer"
import RemindersReducer from "./reminders_reducer";

const EntitiesReducer = combineReducers({
    plants: PlantsReducer,
    reminders: RemindersReducer
}) 

export default EntitiesReducer;