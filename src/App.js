import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  state = {
    todos: []
  }

  componentDidMount() {
    fetch("https://ds-todo-api.now.sh/todos")
    .then(res => res.json())
    .then(todosApi => {
      this.setState({todos: todosApi})
    })
  }

  render() {

    let todos = this.state.todos

    let jsxTodoList = todos.map(todo => (
      <div key={todo._id}>{todo.text}</div>
    ))

    return (
      <div className="App">
        <header className="App-header">
          {todos.length > 0 && jsxTodoList }
        </header>
      </div>
    );
  }
}

export default App;
