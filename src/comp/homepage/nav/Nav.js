import React from "react";

import "./navStyle.css";

function Nav() {
  return (
    <div>
      <nav>
        <h1 className="lambdaEats">Lambda Eats</h1>
        <a className="navLinks" href="#">
          Home
        </a>
        <a className="navLinks" href="#">
          Help
        </a>
      </nav>
    </div>
  );
}

export default Nav;
