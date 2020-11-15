import React from "react";
import "./styleOptions.css";

function Options() {
  return (
    <div>
      <h2 className="foodOpt">Pizza's in Gotham City</h2>
      <div className="boxes">
        <a href="../../forms/Forms.js" id="box1" className="box">
          Vegetarian
        </a>
        <div id="box2" className="box">
          Meat Lovers
        </div>
        <div id="box3" className="box">
          The Special
        </div>
        <div id="box4" className="box">
          The Italian
        </div>
        <div id="box5" className="box">
          The Cheese Monster
        </div>
        <div id="box6" className="box">
          Catering
        </div>
      </div>
    </div>
  );
}

export default Options;
