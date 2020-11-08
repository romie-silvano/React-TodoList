import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {
  itemStyle = () => {
    return {
      background: "#fff",
      padding: "5px",
      margin: "3px",
      borderRadius: '10px',
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    // deconstruct
    const { id, title } = this.props.todo;

    return (
      <div style={this.itemStyle()} id={id}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
          {title}
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}> x </button>
        </p>
      </div>
    )
  }
}

// PropTypes
Todoitem.propTypes = {
  todo: PropTypes.object.isRequired
};

const btnStyle = {
  background: "crimson",
  color: "white",
  padding: "5px 10px",
  border: "none",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
}

export default Todoitem;