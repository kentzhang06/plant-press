import { combineReducers } from "redux";
import PlantsReducer from "./plants_reducer";
import PostsReducer from "./posts_reducer";
import PlantsReducer from "./plants_reducer"
import RemindersReducer from "./reminders_reducer";

const EntitiesReducer = combineReducers({
    plants: PlantsReducer,
    posts: PostsReducer,
    reminders: RemindersReducer
}) 

export default EntitiesReducer;