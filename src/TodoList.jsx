import React from "react";

const TodoList = ({ todos, onToggleTodo }) => {
  return todos.map((todo) => (
    <div key={todo.id} className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleTodo(todo.id)}
      />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
    </div>
  ));
};

export default TodoList;
