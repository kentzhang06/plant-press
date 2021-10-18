import { RECEIVE_USER } from '../../actions/session_actions';

const UserReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch(action.type) {
        case RECEIVE_USER:
            newState[action.user.data._id] = action.user.data;
            return newState;
        default:
            return oldState;
    }
}

export default UserReducer;