import axios from 'axios';

export const uploadImage = (formData) => {
  return axios.post(
    '/api/uploads/images',
    formData,
    { headers: {'Content-Type': 'multipart/form-data'}}
  );
}

export const fetchPlantPosts = (plantId) => {
  return axios.get(`/api/posts/plants/${plantId}`);
}

export const fetchAllPosts = () => {
  return axios.get(`/api/posts/index`);
}

export const createPost = (post) => {
  return axios.post(`/api/posts/${post.plantId}/create`, post);
}

export const updatePost = (post) => {
  return axios.patch(`api/posts/${post.id}`, post);
}

export const deletePost = (postId) => {
  return axios.delete(`api/posts/${postId}`);
}

export const fetchFollowingPosts = () => {
  return axios.get('/api/posts/following')
}