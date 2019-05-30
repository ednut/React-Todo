import React from "react";

const TodoStatus = props => (
  <ul className="todoStatus">
    <li>Completed Todo</li>
    <li>
      <strong className="green"> {props.completedTodo()}</strong>
    </li>
    <li className="uncompleted">Uncompleted Todo </li>
    <li>
      <strong className="red"> {props.unCompletedTodo()}</strong>
    </li>
    <li className="uncompleted">Archived Todo </li>
    <li>
      <strong className="red"> {props.archiveTodo.length}</strong>
    </li>
  </ul>
);

export default TodoStatus;
