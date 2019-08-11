import { combineReducers } from 'redux'
import { task } from './task'
import { filter } from './filter'
export const rootReducer = combineReducers ({
    task,
    filter
})