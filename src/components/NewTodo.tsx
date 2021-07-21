import React, { useRef, useContext } from "react"
import classes from './NewTodo.module.css'
import { TodoContext } from '../store/context'


const NewTodo: React.FC = () => {
    const todosContextobj = useContext(TodoContext)

    const todoInputRef = useRef<HTMLInputElement>(null)
    const submitForm = (event: React.FormEvent) => {
        event.preventDefault()
        const todoText = todoInputRef.current!.value
        if (todoText?.trim().length === 0) {
            return
        }
        todosContextobj.addTodo(todoText)
    }
    return <form action="" className={classes.form} onSubmit={submitForm}>
        <label htmlFor="text" className="">New todo</label>
        <input type="text" id='text' ref={todoInputRef} />
        <button>Add todo</button>
    </form>
}

export default NewTodo