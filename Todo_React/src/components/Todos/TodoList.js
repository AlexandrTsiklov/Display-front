import Todo from "./Todo";


export default function TodoList({todos, deleteTodo, toggleTodo, liftUpTodo, liftDownTodo}){
    return todos.map((todo) => <Todo key = {todo.id} deleteTodo = {deleteTodo} toggleTodo = {toggleTodo} {...todo} liftUpTodo={liftUpTodo} liftDownTodo={liftDownTodo}/>)
}