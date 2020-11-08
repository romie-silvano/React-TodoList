import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}> 
      <h1> My Todolist </h1>
      <Link to="/React-TodoList"> Home </Link> | <Link to="/about"> About </Link>

    </header>
  );
}

const headerStyle = {
  background: "teal",
  color: "white",
  textAlign: "center",
  padding: "10px"
}

export default Header;