import React, { Component } from "react";
import Header from './components/layout/header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';

class App extends Component {
  state = {
    todos: [
        {
          id: 1,
          title: "Setup react application.",
          completed: false
        },
        {
          id: 2,
          title: "Learn the basics.",
          completed: false
        },
        {
          id: 3,
          title: "Style it.",
          completed: false
        }
    ]
  }

  // mark compplete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }

  addTodo = (title) => {
    const newTodo = {
      id: 4,
      title: title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todos 
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
