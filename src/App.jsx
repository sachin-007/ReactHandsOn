import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";

import './App.css'
import Propss from "./components/Propss";

function App() {
  return (
    <center className="">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <div className="items-container">
      <TodoItem/>
      <TodoItem/>
      <Propss name="sachin" age="24" ></Propss>
      </div>
      


    </center>

  );
}

export default App;
