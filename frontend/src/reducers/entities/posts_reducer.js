import { 
  RECEIVE_POSTS,
  RECEIVE_POST,
  REMOVE_POST
} from '../../actions/post_actions';

const PostsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_POST:
      newState[action.post.id] = action.post;
      return newState;
    case REMOVE_POST:
      delete newState[action.post.id];
      return newState;
    default:
      return state;
  }
}

export default PostsReducer;