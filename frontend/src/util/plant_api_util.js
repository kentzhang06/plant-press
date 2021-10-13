import axios from 'axios';

export const fetchPlants = (userId) => {
    return axios.get(`/api/plants/user/${userId}`)
}

export const createPlant = plantForm => {
    return axios.post('/api/plants/create', plantForm)
}

export const updatePlant = plantForm => {
    return axios.patch(`/api/plants/${plantForm._id}/edit`, plantForm)
}

export const deletePlant = plantId => {
    return axios.delete(`api/plants/${plantId}`)
}

export const fetchPlant = (plantId) => {
    return axios.get(`/api/plants/${plantId}`)
}