import React from 'react'
import { TodoItem } from './todo-item'
export const TodoList = ({task, removeTask, completedTask}) => {
    return (
        <ul >
            
            {task.map(({text, id, isCompleted}) => {
                return (
                    <TodoItem completedTask = {completedTask} removeTask ={removeTask} text = {text} id = {id} isCompleted = {isCompleted}/>
                )
            })}
        </ul>
    )
}