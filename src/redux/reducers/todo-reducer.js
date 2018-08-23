import { ADD_TASK, UPDATE_TASK_TEXT } from '../actions/action-types'

var initialState = {
    tasks: [],
    text: ''
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: state.tasks.concat(action.payload) 
            };
        case UPDATE_TASK_TEXT:
            return { 
                ...state,
                text: action.payload
            }
        default:
            return state;
    }
}

export default todoReducer;