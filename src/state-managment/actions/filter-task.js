import { FILTER_TASK } from '../constants/constants'
export const filterTask = (id) => {
    return {
        type: FILTER_TASK,
        id
    }
}