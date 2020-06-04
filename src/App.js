import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';

class App extends React.Component {
  state = {
    todos: []
  };

  componentDidMount() {
    // process.env holds all our variables (key value pairs) stored in .env file
    let API_URL = process.env.REACT_APP_API_URL;

    console.log('API URL', API_URL);

    fetch(API_URL).then((res) => res.json()).then((todosApi) => {
      this.setState({ todos: todosApi });
    });
  }

  render() {
    let todos = this.state.todos;

    let jsxTodoList = todos.map((todo) => <div key={todo._id}>{todo.text}</div>);

    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/other">Other</Link>
        </nav>
        <Switch>
          <Route path="/" exact>
            <header className="App-header">
              {todos.length > 0 && jsxTodoList}
            </header>
          </Route>
          <Route path="/other">
            <div>
              <h1>Other page</h1>
            </div>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
