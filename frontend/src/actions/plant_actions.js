import * as PlantAPIUtil from "../util/plant_api_util"

export const RECEIVE_MY_PLANTS = "RECEIVE_PLANTS";
export const RECEIVE_PLANT = "RECEIVE_PLANT";
export const REMOVE_PLANT = "REMOVE_PLANT";
export const RECEIVED_PLANT_ERRORS = "RECEIVED_PLANT_ERRORS";
export const CLEAR_PLANT_ERRORS = "CLEAR_PLANT_ERRORS";
 
const receivedMyPlants = plants => ({
    type: RECEIVE_MY_PLANTS,
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

export const fetchMyPlants = () => dispatch => (
    PlantAPIUtil.fetchMyPlants()
        .then(plants => dispatch(receivedMyPlants(plants)))
)

export const createPlant = (plantForm) => dispatch => (
    PlantAPIUtil.createPlant(plantForm)
        .then(plant => dispatch(receivedPlant(plant)), 
        err => dispatch(receivedPlantErrors(err.response.data))
        )
)

export const updatePlant = (plantForm) => dispatch => (
    PlantAPIUtil.updatePlant(plantForm)
        .then(plant => dispatch(receivedPlant(plant)), 
        err => dispatch(receivedPlantErrors(err.response.data))
        )
)

export const deletePlant = (plantId) => dispatch => (
    PlantAPIUtil.deletePlant(plantId)
        .then(() => dispatch(removePlant(plantId)),
        err  => dispatch(receivedPlantErrors(err.response.data))
        )
)