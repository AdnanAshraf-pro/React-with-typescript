import React, { useState } from 'react'
import Todo from '../models/Todo'

type TodoObj = {
    items: Todo[],
    addTodo: (text: string) => void,
    removeTodo: (id: string) => void
}

export const TodoContext = React.createContext<TodoObj>({
    items: [],
    addTodo: () => { },
    removeTodo: (id: string) => { }
})

const TodosContextProvider: React.FC = (props) => {
    const [todos, settodos] = useState<Todo[]>([])

    const addNewTodo = (text: string) => {
        const newTodo = new Todo(text)
        settodos(prevState => {
            return prevState.concat(newTodo)
        })
    }
    const onRemoveTodo = (toDoId: string) => {
        settodos(prevState => {
            return prevState.filter(todo => todo.id === toDoId)
        })
    }
    const contextValue: TodoObj = {
        items: todos,
        addTodo: addNewTodo,
        removeTodo: onRemoveTodo
    }
    return <TodoContext.Provider value={contextValue}>
        {props.children}
    </TodoContext.Provider>
}
export default TodosContextProvider