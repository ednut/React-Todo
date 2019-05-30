import React from "react";
import TodoStatus from "./component/TodoStatus";
import TodoForm from "./component/TodoForm";
import EditTodoForm from "./component/EditTodoForm";
import TodoList from "./component/TodoList";
import Archive from "./component/Archive";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      todos: [],
      archive: [],
      edited: [],
      editMode: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const todoList = {
      id: Date.now(),
      text: this.state.text,
      complete: false
    };

    if (todoList.text !== "") {
      this.setState(prevState => ({
        todos: prevState.todos.concat(todoList),
        text: "",
        editMode: false
      }));
    }
  };

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  markAsCompleted = todoObj => {
    const { todos } = this.state;
    const updated = todos.map(todo =>
      todo.id === todoObj.id ? { ...todo, complete: !todoObj.complete } : todo
    );
    this.setState({
      todos: updated
    });
  };

  editTodo = todoObj => {
    const selectedTodo = {
      id: todoObj.id,
      text: todoObj.text,
      complete: todoObj.complete
    };
    this.setState({
      text: todoObj.text,
      edited: selectedTodo,
      editMode: true
    });
  };

  handleEditUpdate = e => {
    e.preventDefault();
    const { edited, text, todos } = this.state;
    const updated = todos.map(todo =>
      todo.id === edited.id ? { ...todo, text } : todo
    );
    this.setState({
      text: "",
      todos: updated,
      editMode: false
    });
  };

  deleteTodo = todoObj => {
    const { todos } = this.state;
    const updated = todos.filter(todo => todo.id !== todoObj.id);
    this.setState({
      todos: updated
    });
  };

  archiveTodo = todoObj => {
    const { todos } = this.state;
    const savedArchive = todos.filter(todo => todo.id === todoObj.id);
    const updated = todos.filter(todo => todo.id !== todoObj.id);
    this.setState(prevState => ({
      todos: updated,
      archive: prevState.archive.concat(savedArchive)
    }));
  };

  deleteArchive = todoObj => {
    const { archive } = this.state;
    const updated = archive.filter(todo => todo.id !== todoObj.id);
    this.setState({
      archive: updated
    });
  };

  render() {
    let { todos, editMode, archive } = this.state;

    const completedTodo = () => {
      let completed = [];
      todos.map(x => (x.complete === true ? completed.push(x) : x));
      return completed.length;
    };
    const unCompletedTodo = () => {
      let uncompleted = [];
      todos.map(x => (x.complete === false ? uncompleted.push(x) : x));
      return uncompleted.length;
    };

    return (
      <div className="container">
        <Archive archive={archive} deleteArchive={this.deleteArchive} />

        <TodoStatus
          completedTodo={completedTodo}
          unCompletedTodo={unCompletedTodo}
          archiveTodo={this.state.archive}
        />

        {editMode ? (
          <EditTodoForm
            handleSubmit={this.handleEditUpdate}
            state={this.state}
            editTodo={this.editTodo}
            handleChange={this.handleChange}
          />
        ) : (
          <TodoForm
            handleSubmit={this.handleSubmit}
            state={this.state}
            handleChange={this.handleChange}
          />
        )}

        <TodoList
          todos={todos}
          markAsCompleted={this.markAsCompleted}
          editTodo={this.editTodo}
          deleteTodo={this.deleteTodo}
          archiveTodo={this.archiveTodo}
        />
      </div>
    );
  }
}

export default App;
