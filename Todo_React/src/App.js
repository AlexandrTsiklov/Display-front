import { useState } from 'react';
import styles from './App.module.css';
import TodoForm from './components/Todos/TodoForm';
import TodoActions from './components/Todos/TodoActions';
import TodoList from './components/Todos/TodoList';


function App() {

    const[todos, setTodos] = useState([])
    const[todoId, setTodoId] = useState(0)

    const addTodoHandler = text => {
        setTodos([...todos, {id: todoId, text, status: "new"}])
        setTodoId(todoId + 1)
    }

    const onResetHandler = () => {
        setTodos([])
    }

    const onDeleteDoneHandler = () => {
        setTodos(todos.filter(todo => todo.status === "new"))
    }

    const deleteTodoHendler = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const toggleTodoHandler = id => {
        setTodos(todos.map((todo) => {
            return todo.id === id 
                ? {...todo, status: todo.status === "new" ? "done" : "new"}
                : todo
        }))
    }

    const liftUpTodoHandler = id => {
        let previousTodo
        let previousIndex

        let currentTodo
        let currentIndex

        for (let i in todos) {
            if (todos[i].id === id) {
                if (i == 0) {
                    return
                }

                previousTodo = todos[i - 1]
                previousIndex = i - 1

                currentTodo = todos[i]
                currentIndex = i
            }
        }

        let newTodos = todos.slice()
        newTodos[previousIndex] = currentTodo
        newTodos[currentIndex] = previousTodo

        setTodos(newTodos)
    }

    const liftDownTodoHandler = id => {
        let nextTodo
        let nextIndex

        let currentTodo
        let currentIndex

        for (let i in todos) {
            if (todos[i].id === id) {
                if (+i + 1 === todos.length) {
                    return
                }

                nextTodo = todos[+i + 1]
                nextIndex = +i + 1

                currentTodo = todos[i]
                console.log(currentTodo)
                currentIndex = i
            }
        }

        let newTodos = todos.slice()
        newTodos[nextIndex] = currentTodo
        newTodos[currentIndex] = nextTodo

        setTodos(newTodos)
    }

    let countDone = todos.filter((todo) => todo.status === "done").length

    return (
        <div className = {styles.app}>
            <h1 className = {styles.mainHeader}>Best todo app</h1>
            <TodoForm addTodo = {addTodoHandler} />
            { todos.length
                ? (
                    <>
                        <TodoActions onReset = {onResetHandler} onDeleteDone = {onDeleteDoneHandler}/>
                        <TodoList todos = {todos} deleteTodo = {deleteTodoHendler} toggleTodo = {toggleTodoHandler} liftUpTodo = {liftUpTodoHandler} liftDownTodo={liftDownTodoHandler}/> 
                    </>
                ) 
                : <h3>You don't have any tasks</h3>
            }
            { countDone ? <h4 className = {styles.result}>You have {countDone} completed {countDone === 1 ? "task" : "tasks"}</h4> : ""}
        </div>
    );
}

export default App;