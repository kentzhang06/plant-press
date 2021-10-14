import { combineReducers } from "redux";
import PostsReducer from "./posts_reducer";
import PlantsReducer from "./plants_reducer"
import RemindersReducer from "./reminders_reducer";
import FollowsReducer from "./follows_reducer"

const EntitiesReducer = combineReducers({
    plants: PlantsReducer,
    posts: PostsReducer,
    reminders: RemindersReducer,
    follows: FollowsReducer
}) 

export default EntitiesReducer;