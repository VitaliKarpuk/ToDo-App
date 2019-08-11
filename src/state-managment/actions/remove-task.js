import { REMOVE_TASK } from '../constants/constants'
export const removeTask = (id) => {
    return {
        type: REMOVE_TASK,
        id
    }
}