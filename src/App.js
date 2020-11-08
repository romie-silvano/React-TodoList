import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/layout/header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
//import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  //same as documentReady in jquery
  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({ todos: res.data }))
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
    axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => 
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
  }

  addTodo = (title) => {
    //const newTodo = {
    //  title: title,
    //  completed: false
    //};
    //this.setState({ todos: [...this.state.todos, newTodo] });
    axios.post('http://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false
    })
    .then(res => this.setState({ todos: [...this.state.todos, res.data]}))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route
            exact
            path="/React-TodoList" 
            render={props => (
              <React.Fragment>
                <div className="container">
                  <AddTodo addTodo={this.addTodo} />
                  <Todos 
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </div>
              </React.Fragment>
          )}></Route>

          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;