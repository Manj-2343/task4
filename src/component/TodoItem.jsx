import React from "react";

function TodoItem({ index, text, completed, toggleTaskCompletion }) {
  return (
    <li className={completed ? "completed" : ""}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTaskCompletion(index)}
      />
      <span>{text}</span>
    </li>
  );
}

export default TodoItem;
