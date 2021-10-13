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

export const fetchPlantPosts = (plantId) => dispatch => (
  PostAPIUtil.receivePlantPosts(plantId)
    .then(posts => dispatch(receivePosts(posts)))
)

export const fetchAllPosts = () => dispatch => (
  PostAPIUtil.receiveAllPosts()
    .then(posts => dispatch(receivePosts(posts)))
)

export const createPost = (post) => dispatch => (
  PostAPIUtil.createPost(post)
    .then(post => dispatch(receivePost(post)),
    err => dispatch(receivePostErrors(err.response.data))
    )
)

export const updatePost = (post) => dispatch => (
  PostAPIUtil.updatePost(post)
    .then(post => dispatch(receivePost(post)),
    err => dispatch(receivePostErrors(err.response.data))
    )
)

export const deletePost = (postId) => dispatch => (
  PostAPIUtil.deletePost(postId)
    .then(() => dispatch(removePost(postId)),
    err => dispatch(receivePostErrors(err.response.data))
    )
)