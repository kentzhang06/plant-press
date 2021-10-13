import { combineReducers } from 'redux';
import PlantsErrorsReducer from './plant_errors_reducer';
import SessionErrorsReducer from './session_errors_reducer';
import PostsErrorsReducer from './post_errors_reducer';

export default combineReducers({
  sessionErrors: SessionErrorsReducer,
  plantErrors: PlantsErrorsReducer,
  postErrors: PostsErrorsReducer
});