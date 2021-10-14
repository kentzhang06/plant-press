import axios from 'axios'

export const followPlant = (plantId) => {
  return axios.post(`/api/plants/${plantId}/follow`)
}

export const unfollowPlant = (plantId) => {
  return axios.delete(`/api/plants/${plantId}/follow`)
}


export const fetchFollows = () => {
  return axios.get('/api/users/following')
}