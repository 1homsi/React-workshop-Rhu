import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ""
    };
  }

  addTodo = () => {
    const newTodo = this.state.newTodo;
    if (newTodo) {
      this.setState({
        todos: [...this.state.todos, {
          todo: newTodo,
          completed: false
        }],
        newTodo: ""
      });
    }
  };

  deleteTodo = (index) => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({
      todos
    });
  };

  completedTodo = (index) => {
    const todos = [...this.state.todos];
    todos[index].completed = !todos[index].completed;
    this.setState({
      todos
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          value={this.state.newTodo}
          onChange={e => this.setState({ newTodo: e.target.value })}
        />
        <button
          onClick={this.addTodo}
        >
          Add Todo
        </button>
        <ul>
          {this.state.todos.map((todo, index) => {
            return (
              <li key={index}>
                {`${index + 1} - ${todo.todo}`}
                {todo.completed ? (
                  <button
                    onClick={() => this.completedTodo(index)}
                  >Remove Completed</button>
                ) : (
                  <button
                    onClick={() => this.completedTodo(index)}
                  >Completed</button>
                )}
                <button onClick={() => this.deleteTodo(index)}>Delete</button>
              </li>
            );
          }
          )}
        </ul>
      </div>
    );
  }
}

