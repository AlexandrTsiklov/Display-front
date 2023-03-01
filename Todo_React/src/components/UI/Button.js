import styles from "./Button.module.css"


export default function Button({children, title}){
    return <button title = {title} className = {styles.button}>{children}</button>
}