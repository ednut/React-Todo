import React from "react";

const EditTodoForm = props => (
  <form onSubmit={props.handleSubmit}>
    <div className="formWrap clearfix">
      <input
        type="text"
        defaultValue={props.state.text}
        placeholder="Edit todo"
        onChange={props.handleChange}
      />
      <button>
        <i className="fas fa-save" />
      </button>
    </div>
  </form>
);

export default EditTodoForm;
