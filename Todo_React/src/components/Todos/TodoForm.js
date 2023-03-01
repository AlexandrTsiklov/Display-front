import { useState } from 'react';
import styles from './TodoForm.module.css'


export default function TodoForm({addTodo}){    

    const[text, setText] = useState('')

    const onSubmitHandler = event => {
        event.preventDefault()
        addTodo(text)
        setText('')
    }

    return (
        <form className = {styles.todoForm} onSubmit = {onSubmitHandler}>
            <input className = {`${styles.toDoInputGroup} ${styles.toDoInput}`} onChange = {event => { setText(event.target.value)} } type = "text" name = "todo" placeholder = "Enter your task" value = {text}/>
            <button type = "submit" className = {styles.submit}>Create</button>
        </form>
    )
}