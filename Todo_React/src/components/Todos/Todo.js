import styles from './Todo.module.css'
import { RiTodoFill, RiDeleteBin2Line } from "react-icons/ri"
import { FaCheck } from "react-icons/fa"
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";


export default function Todo({ id, text, status, deleteTodo, toggleTodo, liftUpTodo, liftDownTodo }) {
    return (
        <div className={`${styles.todoContainer} ${status === "done" ? styles.todoDone : ""}`}>
            <RiTodoFill className={styles.todoIconCalendar} />
            <div className = {styles.text}>{text}</div>

            <FaCheck className = {`${styles.action} ${styles.tick}`} onClick = {() => toggleTodo(id)} />
            <RiDeleteBin2Line className = {`${styles.action} ${styles.remove}`} onClick = {() => deleteTodo(id)} />
        
            <div className={styles.arrowsContainer}>
                <AiFillCaretUp className={styles.arrow} onClick = {() => liftUpTodo(id)}></AiFillCaretUp>
                <AiFillCaretDown className={styles.arrow} onClick = {() => liftDownTodo(id)}></AiFillCaretDown>
            </div>
        </div>
    )
}