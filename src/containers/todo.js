import React, { useState } from 'react'
import { Title } from '../components/title'
import { TodoInput } from '../components/todo-input'
import { TodoList } from '../components/todo-list'
import { Footer } from '../components/footer'
import { connect } from 'react-redux'
import { addTask } from '../state-managment/actions/add-task'
import { removeTask } from '../state-managment/actions/remove-task'
import { completedTask } from '../state-managment/actions/completed-task'
import { filterTask } from '../state-managment/actions/filter-task'
const ToDo = (props) => {
    const { task, addTask, removeTask, completedTask, filterTask, filter } = props
    const [ textInput , setTextInput ] = useState('')
    const handleChangeTextInput = ({target: {value}}) => {
        setTextInput(value)
    }


    const add = ({key}) => {
        if(textInput.length > 3 && key === 'Enter') {
            addTask (textInput, new Date().getTime(), false)
            setTextInput ('')
        }
    }
    const fiteredTask = (task , filter ) => {
        switch (filter) {
            case 'Completed':
                return task.filter(task => task.isCompleted)
            case 'Active':
                return task.filter(task => !task.isCompleted)
            default:
                return task
        }
    }
    const getLengthTask = task.filter(task => !task.isCompleted).length
    const endFilterTask = fiteredTask(task, filter)
    return(
        <div className = 'wrapedInput'>
            <Title title = 'App ToDo' />
            <TodoInput onKeyPress = {add} onChange = {handleChangeTextInput} value = {textInput} />
            <TodoList completedTask = {completedTask} removeTask = {removeTask} task = {endFilterTask}/>
            <Footer getLengthTask = {getLengthTask} filter = {filterTask} />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        task: state.task,
        filter: state.filter
    }
}
export default connect (mapStateToProps, {addTask, removeTask, completedTask, filterTask})(ToDo)