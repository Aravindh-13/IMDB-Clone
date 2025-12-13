import React from "react";
import Todo from "./Todo";

function Todocontainer({ tasks, index, delTodo }) {
  return (
    <div className="task-container">
      {tasks.map((task, todoIndex) => (
        <Todo key={todoIndex} task={task} index={todoIndex} delTodo={delTodo} />
      ))}
    </div>
  );
}

export default Todocontainer;
