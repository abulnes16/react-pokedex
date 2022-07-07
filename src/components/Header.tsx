import React from "react";

interface HeaderProps {
  logo?: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className="header">
      <img src={props.logo} alt="logo" width="200" />
    </header>
  );
};

export default Header;
