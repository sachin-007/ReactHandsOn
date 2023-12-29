import { useState } from "react";

function Todov1() {
    const [task,setTask] = useState('')
    const [todos,setTodos] = useState(['sachin','rohan','saci'])

    // function createTodo() {
    //     setTodos(oldTodos=>{
    //         setTask('')
    //         return [...oldTodos,task]
    //     })
    //     console.log(todos);
    // }

    function createTodo(e) {
        e.preventDefault()
        setTodos(oldTodos=>{
            setTask('')
            return [...oldTodos,task]
        })
        console.log(todos);
    }

    function enterpress(e){
        if(e.keyCode==13){
            createTodo();
        }
    }

    return(

        <div>
            <h1>Best Todo App</h1>
            
            <form onSubmit={createTodo}>

            <div>
                <input type="text" onKeyDown={enterpress} value={task} onChange={e=>{setTask(e.target.value)}} />
                <button type="submit">Create Todo</button>
            </div>
            </form>
            <ul>
                {
                    todos.map(todo=>{
                        return <li>{todo}</li>
                    })
                }
                    {/* <li>{todos}</li> */}
               </ul>
        </div>
    )
}
export default Todov1;