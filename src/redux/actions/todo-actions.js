import {ADD_TASK, UPDATE_TASK_TEXT} from './action-types'

export const addTask = (task) => {
    return {
        type:ADD_TASK,
        payload: task
    }
}

export const updateTaskText = (text) => {
    return {
        type:UPDATE_TASK_TEXT,
        payload: text
    }
}