import React, { Component } from 'react'

export class AddTodo extends Component {
  state = {
    title: ""
  };
  
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.title !== '') {
      this.props.addTodo(this.state.title);
      this.setState({ title: '' });
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display: 'flex', padding: '0px 20px'}}>
        <input 
          type="text" 
          name="title" 
          placeholder="Add new todo task..." 
          onChange={this.onChange} 
          value={this.state.title}
          style={{flex: '10', padding: '20px'}}
        />
        <input type="submit" value="Submit" className="btn" style={{width: '140px'}} />
      </form>
    )
  }
}

export default AddTodo
