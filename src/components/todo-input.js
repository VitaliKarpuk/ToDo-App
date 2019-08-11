import React from 'react'
export const TodoInput = ({onChange, value, onKeyPress}) => {
    return (
        <input
            onKeyPress = {onKeyPress}
            onChange = {onChange}
            value = {value}
            placeholder = 'Write task'
            type ='text' />
    )
}