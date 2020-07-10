import React from "react";

const Header = ({ logoPath }) => {
  return (
      <header className="header">
        <img src={logoPath} alt="logo" width="200" />
      </header>
  );
};


export default Header;