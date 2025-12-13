import { useState } from "react";
import "./App.css";
import Inputcontainer from "./components/Inputcontainer";
import Todocontainer from "./components/Todocontainer";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [tasks, setTasks] = useState([]);

  function writeTodo(e) {
    setInputVal(e.target.value);
  }

  function todoTasks() {
    if (inputVal !== "") {
      setTasks((prev) => [...prev, inputVal]);
      setInputVal("");
    }
  }

  function delTodo(todoIndex) {
    setTasks((prevTodos) =>
      prevTodos.filter((prevTodos, prevTodosIndex) => {
        return prevTodosIndex != todoIndex;
      })
    );
  }

  return (
    <main className="main-content">
      <h1>To do list</h1>
      <Inputcontainer
        inputVal={inputVal}
        writeTodo={writeTodo}
        todoTask={todoTasks}
      />
      <Todocontainer tasks={tasks} delTodo={delTodo} />
    </main>
  );
}

export default App;
