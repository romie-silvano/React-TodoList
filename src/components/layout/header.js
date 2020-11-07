import React from 'react';

function Header() {
  return <header style={headerStyle}> My Todolist</header>;
}

const headerStyle = {
  background: "teal",
  color: "white",
  textAlign: "center",
  padding: "10px",
  height: "50px"
}

export default Header;