import { RECEIVED_PLANT_ERRORS, CLEAR_PLANT_ERRORS } from "../../actions/plant_actions";

const PlantsErrorsReducer = (state = [], type) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVED_PLANT_ERRORS:
            return action.errors;
        case CLEAR_PLANT_ERRORS:
            return [];
        default:
            return state;
    }
}

export default PlantsErrorsReducer;