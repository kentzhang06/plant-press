import { RECEIVE_FOLLOW, RECEIVE_UNFOLLOW, RECEIVE_FOLLOWS } from '../../actions/follow_actions'

const FollowsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_FOLLOWS:
      // let follows = {};
      // action.follows.forEach(plantId => {
      //   follows[plantId] = "followed"
      // });
      // return follows;
      return action.follows;
    case RECEIVE_FOLLOW:
      newState[action.plantId] = "followed";
      return newState;
    case RECEIVE_UNFOLLOW:
      delete newState[action.plantId]
      return newState
    default:
      return state;
  }
}

export default FollowsReducer;