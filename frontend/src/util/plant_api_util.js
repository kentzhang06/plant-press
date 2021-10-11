import axios from 'axios';

export const fetchMyPlants = () => {
    return axios.get('/api/plants/myplants')
}

export const createPlant = plantForm => {
    return axios.post('/api/plants/create', plantForm)
}

export const updatePlant = plantForm => {
    return axios.patch(`/api/plants/${plantForm.id}/edit`, plantForm)
}

export const deletePlant = plantId => {
    return axios.delete(`api/plants/${plantId}`)
}