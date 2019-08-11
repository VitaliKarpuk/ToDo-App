import React from 'react'
export const TodoItem = ({text, id, isCompleted, removeTask, completedTask}) => {
    return (
        <li key = {id} className = {isCompleted ? 'liOpacity': ''}>
            <i onClick = {() => completedTask(id) }
                className={ isCompleted ?  "fa fa-check-circle-o" : "fa fa-circle-thin" }
                aria-hidden="true"></i>
            <span className = { isCompleted ? 'taskCompleted': ''}>{text}</span>
            <i  onClick = {() => removeTask(id)} className="fa fa-times" aria-hidden="true"></i>
        </li>
    )
}