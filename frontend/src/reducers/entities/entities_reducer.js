import { combineReducers } from "redux";
import PlantsReducer from "./plants_reducer"

const EntitiesReducer = combineReducers({
    plants: PlantsReducer
}) 

export default EntitiesReducer;