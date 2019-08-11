import { ADD_TASK } from '../constants/constants'
export const addTask = (text, id, isCompleted) => {
    return {
        type: ADD_TASK,
        text,
        id,
        isCompleted
    }
}