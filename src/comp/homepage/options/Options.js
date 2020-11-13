import React from "react";
import "./styleOptions.css";

function Options() {
  return (
    <div>
      <h2 className="foodOpt">Pizza's in Gotham City</h2>
      <div class="boxes">
        <div id="box1" class="box">
          Vegetarian
        </div>
        <div id="box2" class="box">
          Meat Lovers
        </div>
        <div id="box3" class="box">
          The Special
        </div>
        <div id="box4" class="box">
          The Italian
        </div>
        <div id="box5" class="box">
          The Cheese Monster
        </div>
        <div id="box6" class="box">
          Catering
        </div>
      </div>
    </div>
  );
}

export default Options;
