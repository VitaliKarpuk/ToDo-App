import { ADD_TASK, REMOVE_TASK, COMPLETED_TASK } from '../constants/constants'
const initialState = [
    {
    text: 'Lern English',
    id: 1,
    isCompleted: false
},
{
    text: 'Lern React',
    id: 2,
    isCompleted: false
},
{
    text: 'Wake up',
    id: 3,
    isCompleted: false
}
]

export const task = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return [...state,
                {
                    id: action.id,
                    text: action.text,
                    isCompleted: action.isCompleted
                }
            ]
        case REMOVE_TASK:
            return state.filter( task => task.id !== action.id)
        case COMPLETED_TASK:
            return state.filter( task => {
                if(task.id === action.id) {
                     task.isCompleted = !task.isCompleted
                }
                return task
            })
        default:
            break;
    }
    return state
}