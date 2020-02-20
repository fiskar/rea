import React from 'react'
import TodoItem from './TodoItem'

const stylus = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

export default function TodoList(props) {
    return(
        <ul style={stylus.ul}>
            {props.todos.map((todo, index) => {
                return <TodoItem todo ={todo} key={todo.id} index = {index}></TodoItem>
            })}
        </ul>
    )
}