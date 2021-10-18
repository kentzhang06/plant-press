import { combineReducers } from "redux";
import SessionReducer from "./session_reducer";
import ErrorsReducer from "./errors/errors_reducer";
import EntitiesReducer from "./entities/entities_reducer";

const rootReducer = combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
  errors: ErrorsReducer,
});

export default rootReducer;
