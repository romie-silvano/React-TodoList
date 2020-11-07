import React, { Component } from "react";
import { Todoitem } from './Todoitem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return (
      <div style={{padding: "10px 20px"}}>
        { 
          this.props.todos.map(todo => (
            <Todoitem 
              key={todo.id}
              todo={todo}
              markComplete={this.props.markComplete}
            />
          ))
        }
      </div>
    );
  };
};

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;
