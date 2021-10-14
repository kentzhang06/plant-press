import { RECEIVE_PLANTS, RECEIVE_PLANT, REMOVE_PLANT } from "../../actions/plant_actions";

const PlantsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_PLANTS:
            let myPlants = {};
            action.plants.forEach(plant => {
                myPlants[plant._id] = plant;
            });
            return myPlants;
        case RECEIVE_PLANT:
            if (Array.isArray(action.plant)) {
                newState[action.plant[0]._id] = action.plant[0];
            } else {
                newState[action.plant._id] = action.plant;
            }
            return newState;
        case REMOVE_PLANT:
            delete newState[action.plantId] 
            return newState;
        default:
            return state;
    }
}

export default PlantsReducer;