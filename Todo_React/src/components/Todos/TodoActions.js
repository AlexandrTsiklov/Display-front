import styles from "./TodoActions.module.css"
import { RiRefreshLine, RiDeleteBin2Line } from "react-icons/ri"
import Button from "../UI/Button"


export default function TodoActions({onReset, onDeleteDone}){
    return (
        <div className = {styles.todoActions}>
            <Button title = "Clear all" children><RiRefreshLine className = {styles.actionReset} onClick = {onReset} /></Button>
            <Button title = "Delete ticked" children><RiDeleteBin2Line className = {styles.actionDelete} onClick = {onDeleteDone}/></Button>
        </div>
    )
}