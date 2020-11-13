import React from "react";
import Forms from "./comp/Forms.js";
import Shipped from "./comp/Shipped.js";
import Home from "./comp/homepage/banner/Home.js";
import Option from "./comp/homepage/options/Options.js";

import Nav from "./comp/homepage/nav/Nav.js";

const App = () => {
  return (
    <>
      <Nav />
      <Home />
      <Option />
      <Forms />
      <Shipped />
    </>
  );
};
export default App;
