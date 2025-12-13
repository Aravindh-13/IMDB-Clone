import React from "react";

function Todo({ task, index, delTodo }) {
  return (
    <div className="todo-tasks">
      <p>{task}</p>
      <div className="btn-checkbox">
        <input type="checkbox" />
        <button onClick={() => delTodo(index)}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
