import React from "react";

const TodoList = props => (
  <ul className="todoList">
    {props.todos.map(x => (
      <li id={x.id} key={x.id}>
        <input
          type="checkbox"
          onChange={() => props.markAsCompleted(x)}
          checked={x.complete}
          name="complete"
        />
        <span className={x.complete === true ? "linethrough text" : "text"}>
          {x.text}
        </span>
        <button className="edit" onClick={() => props.editTodo(x)}>
          Edit
        </button>
        <button className="archive" onClick={() => props.archiveTodo(x)}>
          Archive
        </button>
        <button className="delete" onClick={() => props.deleteTodo(x)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;
