import { COMPLETED_TASK } from '../constants/constants'
export const completedTask = (id) => {
    return {
        type: COMPLETED_TASK,
        id
    }
}