import { RECEIVE_MY_PLANTS, RECEIVE_PLANT, REMOVE_PLANT } from "../../actions/plant_actions";

const PlantsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_MY_PLANTS:
            return action.plants;
        case RECEIVE_PLANT:
            newState[action.plant.id] = action.plant;
            return newState;
        case REMOVE_PLANT:
            delete newState[action.plantId] 
            return newState;
        default:
            return state;
    }
}

export default PlantsReducer;