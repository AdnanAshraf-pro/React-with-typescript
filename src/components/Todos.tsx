import React, { useContext } from 'react'

import TodoItem from './TodoItem'
import classes from './Todo.module.css'
import { TodoContext } from '../store/context'

const Todos: React.FC = () => {
    const todosContextobj = useContext(TodoContext)
    return (
        <ul className={classes.todos}>
            {todosContextobj.items.map(item => (
                <TodoItem key={item.id} text={item.text} onRemoveTodo={todosContextobj.removeTodo.bind(null, item.id)} />
            ))}


        </ul>
    )
}

export default Todos
