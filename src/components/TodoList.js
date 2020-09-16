import React from "react";
import TodoItem from "./TodoItem";
function TodoList({ items }) {
  return (
    <ul className="list-group my-5">
      <h3 className="text-capitalize text-center">todo list</h3>
      {items.map((item) => {
        return <TodoItem key={item.id} title={item.title} />;
      })}
      <button
        type="button"
        className="btn btn-danger btn-block text-capitalize mt-5"
      >
        clear list
      </button>
    </ul>
  );
}

export default TodoList;
