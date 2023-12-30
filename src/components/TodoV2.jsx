import { useState } from "react";
let todoid = 0;
function TodoV2() {

    const [task,setTask] = useState('')
    const [todos,setTodos] = useState([])
  

    function AddTodo(e){
        e.preventDefault();

        setTodos(oldtodos=>{
            setTask('')
            return [...oldtodos,{todo:task,ID:todoid++}];
        })
        
    }

    function deleteTodo(ItemId) {
        setTodos(oldtodos=>oldtodos.filter(item=>item.ID!==ItemId))
    }

    return(
        <div>
        <h1>best todo application</h1>        

        <form onSubmit={AddTodo}>
        <input type="text" value={task} onChange={e=>{setTask(e.target.value)}} /> 
        <button type="submit">Add Todo</button>
        </form>
        
        <div>
            <ul>
                {
                    todos.map((item,index)=>{
                        return (
                        <div key={item.ID}>
                        <li>{item.todo}({item.ID})</li> <button onClick={()=>deleteTodo(item.ID)}>Delete</button>
                        </div>
                        )
                    })
                }

            </ul>
        </div>

        </div>
    )
}


export default TodoV2;