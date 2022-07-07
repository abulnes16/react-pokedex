import React from "react";

interface FooterProps {
  author: string;
}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer>
      <h3>Creado con amor por {props.author}</h3>
    </footer>
  );
};

export default Footer;
