import React from 'react'
const Btn_Filter = [
    {
        text: 'Active',
        id: 'Active'
    },
    {
        text: 'Completed',
        id: 'Completed'
    },
    {
        text: 'All',
        id: 'All'
    }
]
export const Footer = ({filter, getLengthTask}) => {
    return (
        <div className = 'wrap_Btn'>
            <h4>{getLengthTask} left task</h4>
            {Btn_Filter.map(({text, id}) => <button onClick = {() => filter(id)} key = {id}>{text}</button>)}
        </div>
        
    )
}