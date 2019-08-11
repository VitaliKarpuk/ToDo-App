/* eslint-disable default-case */
import { FILTER_TASK } from '../constants/constants'
const filters = 'All'
export const filter = (state = filters, action) => {
    switch (action.type) {
        case FILTER_TASK:
            return action.id
    }
    return state
}