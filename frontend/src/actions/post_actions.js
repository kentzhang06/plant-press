import * as PostAPIUtil from "../util/post_api_util";


export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";
export const CLEAR_POST_ERRORS = "CLEAR_POST_ERRORS";

const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
})

const receivePost = post => ({
  type: RECEIVE_POST,
  post
})

const removePost = postId => ({
  type: REMOVE_POST,
  postId
})

const receivePostErrors = errors => ({
  type: RECEIVE_POST_ERRORS,
  errors
})


export const clearPostErrors = () => ({
  type: CLEAR_POST_ERRORS
})

export const uploadImage = async ({image, description}) => {
  const formData = new FormData();
  formData.append("image", image)
  formData.append("description", description)
  const result = await PostAPIUtil.uploadImage(formData);
  return result.data;
}

export const fetchPlantPosts = (plantId) => dispatch => (
  PostAPIUtil.fetchPlantPosts(plantId)
    .then(posts => dispatch(receivePosts(posts.data)))
)

export const fetchAllPosts = () => dispatch => (
  PostAPIUtil.fetchAllPosts()
    .then(posts => dispatch(receivePosts(posts.data)))
)

export const fetchFollowingPosts = () => dispatch => (
  PostAPIUtil.fetchFollowingPosts()
    .then(result => dispatch(receivePosts(result.data)))
)

export const createPost = (post) => dispatch => (
  PostAPIUtil.createPost(post)
    .then(post => dispatch(receivePost(post.data)),
    err => dispatch(receivePostErrors(err.response.data))
    )
)

export const updatePost = (post) => dispatch => (
  PostAPIUtil.updatePost(post)
    .then(post => dispatch(receivePost(post.data)),
    err => dispatch(receivePostErrors(err.response.data))
    )
)

export const deletePost = (postId) => dispatch => (
  PostAPIUtil.deletePost(postId)
    .then(() => dispatch(removePost(postId)),
    err => dispatch(receivePostErrors(err.response.data))
    )
)