import { combineReducers } from "redux";
import PlantsReducer from "./plants_reducer";
import PostsReducer from "./posts_reducer";

const EntitiesReducer = combineReducers({
    plants: PlantsReducer,
    posts: PostsReducer
}) 

export default EntitiesReducer;