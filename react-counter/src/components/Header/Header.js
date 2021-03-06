import React from "react";

const Header = () => {
  const date = new Date();

  return (
    <header>
      <h1>Keep clicking.</h1>
      <p> {date.toDateString()}</p>
    </header>
  );
};

export default Header;