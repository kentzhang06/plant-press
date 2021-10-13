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
      action.posts.forEach(ele => {
        newState[ele._id] = ele;
      });
      return newState;
    case RECEIVE_POST:
      newState[action.post._id] = action.post;
      return newState;
    case REMOVE_POST:
      delete newState[action.postId];
      return newState;
    default:
      return state;
  }
}

export default PostsReducer;