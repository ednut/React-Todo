import React from "react";

const TodoForm = props => (
  <form onSubmit={props.handleSubmit}>
    <div className="formWrap clearfix">
      <input
        type="text"
        name="text"
        value={props.state.text}
        onChange={props.handleChange}
        placeholder="Enter todo"
      />
      <button>
        <i className="fas fa-plus" />
      </button>
    </div>
  </form>
);

export default TodoForm;
