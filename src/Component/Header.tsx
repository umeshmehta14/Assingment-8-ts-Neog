import React from "react";

interface HeaderType {
  title: string;
}

const Header: React.FC<HeaderType> = ({ title }) => {
  return <h1>{title}</h1>;
};

export default Header;
