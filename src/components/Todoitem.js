import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {
  itemStyle = () => {
    return {
      background: "#fff",
      padding: "10px",
      margin: "3px",
      borderRadius: '10px',
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    // deconstruct

    const { id, title } = this.props.todo;
    return (
      <div style={this.itemStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
          {" "}
          {title}
        </p>
      </div>
    )
  }
}

// PropTypes
Todoitem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default Todoitem;