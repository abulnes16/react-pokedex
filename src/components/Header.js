import React from "react";

const Header = (props) => {
  return (
    <header className="header">
      <img src={props.logo} alt="logo" width="200" />
    </header>
  );
};

export default Header;
