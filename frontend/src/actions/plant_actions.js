import * as PlantAPIUtil from "../util/plant_api_util"

export const RECEIVE_PLANTS = "RECEIVE_PLANTS";
export const RECEIVE_PLANT = "RECEIVE_PLANT";
export const REMOVE_PLANT = "REMOVE_PLANT";
export const RECEIVED_PLANT_ERRORS = "RECEIVED_PLANT_ERRORS";
export const CLEAR_PLANT_ERRORS = "CLEAR_PLANT_ERRORS";
 
const receivedPlants = plants => ({
    type: RECEIVE_PLANTS,
    plants
})

const receivedPlant = plant => ({
    type: RECEIVE_PLANT,
    plant
})


const removePlant = plantId => ({
    type: REMOVE_PLANT,
    plantId
})

const receivedPlantErrors = errors => ({
    type: RECEIVED_PLANT_ERRORS,
    errors
})

export const clearPlantErrors = () => ({
    type: CLEAR_PLANT_ERRORS
})

export const fetchPlants = (userId) => dispatch => (
    PlantAPIUtil.fetchPlants(userId)
        .then(result => dispatch(receivedPlants(result.data)))
)

export const createPlant = (plantForm) => dispatch => (
    PlantAPIUtil.createPlant(plantForm)
        .then(result => dispatch(receivedPlant(result.data)), 
        err => dispatch(receivedPlantErrors(err.response.data))
        )
)

export const updatePlant = (plantForm) => dispatch => (
    PlantAPIUtil.updatePlant(plantForm)
        .then(result => dispatch(receivedPlant(result.data)), 
        err => dispatch(receivedPlantErrors(err.response.data))
        )
)

export const deletePlant = (plantId) => dispatch => (
    PlantAPIUtil.deletePlant(plantId)
        .then(() => dispatch(removePlant(plantId)),
        err  => dispatch(receivedPlantErrors(err.response.data))
        )
)