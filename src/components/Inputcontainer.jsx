import React from "react";

function Inputcontainer({ inputVal, writeTodo, todoTask }) {
  return (
    <div className="input-container">
      <input type="text" value={inputVal} onChange={writeTodo} />
      <button onClick={todoTask}>+</button>
    </div>
  );
}

export default Inputcontainer;
