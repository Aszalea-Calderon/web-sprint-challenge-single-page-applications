import React from "react";
import Nav from "../homepage/nav/Nav";

import "./styleForm.css";

function Forms() {
  //Managing state
  // const defaultState ={
  //   name="",

  // }

  return (
    <div>
      <Nav />
      <h1 className="byop">Build Your Own Pizza</h1>

      <div className="buildYourOwn">
        <div className="coverForm"></div>
      </div>
      <form className="sizePadding">
        <h2 className="pizHead">Choice of Size</h2>
        <p>Required</p>
        <select name="select">
          <option value="null">-Choose Your Size-</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <h2 className="pizHead">Choice of Sauce</h2>
        <p>Required</p>
        <label name="red">Original Red</label>
        <input name="red" type="radio" />
        <label name="garlic">Garlic Ranch</label>
        <input name="garlic" type="radio" />
        <label name="bbq">BBQ Sauce</label>
        <input name="bbq" type="radio" />
        <label name="spinach">Spinach Alfredo</label>
        <input name="spinach" type="radio" />
        <h2 className="pizHead">Add Toppings</h2>
        <p>Choose What You Would Like- </p>
        <label htmlFor="Pepperoni">Pepperoni</label>
        <input name="Pepperoni" type="checkbox" />
        <label htmlFor="Sausage">Sausage</label>
        <input name="Sausage" type="checkbox" />
        <label htmlFor="Canadianbacon">Canadian Bacon</label>
        <input name="Canadianbacon" type="checkbox" />
        <label htmlFor="Spicy">Spicy Italian Sausage</label>
        <input name="Spicy" type="checkbox" />
        <label htmlFor="GrilledChicken">Grilled Chicken</label>
        <input name="GrilledChicken" type="checkbox" />
        <label htmlFor="Onions">Onions</label>
        <input name="Onions" type="checkbox" />
        <label htmlFor="Greenpeppers">Green peppers</label>
        <input name="Greenpeppers" type="checkbox" />
        <label htmlFor="DicedTomatoes">Diced Tomatoes</label>
        <input name="DicedTomatoes" type="checkbox" />
        <label htmlFor="blackOlives">Black Olives</label>
        <input name="blackOlives" type="checkbox" />
        <label htmlFor="roastedGarlic">Roasted Garlic</label>
        <input name="roastedGarlic" type="checkbox" />
        <label htmlFor="artichokeHearts">artichoke Hearts</label>
        <input name="artichokeHearts" type="checkbox" />
        <label htmlFor="threeCheese">Three Cheese</label>
        <input name="threeCheese" type="checkbox" />
        <label htmlFor="Pineapple">Pineapple</label>
        <input name="Pineapple" type="checkbox" />
        <label htmlFor="extraCheese">Extra Cheese</label>
        <input name="extraCheese" type="checkbox" />
        <h2 className="pizHead">Substitute</h2>
        <p>Choose up to 1</p>
        Gluten free Crust
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>(+ $1)
        </label>
        <h2 className="pizHead">Special Instructions</h2>
        <label>
          <input type="text" name="name" placeholder="Extra sauce?" />
        </label>
        <h2>Anything else?</h2>
        <div>Total: $17.99</div>
        <button className="add">Add To order</button>
      </form>
    </div>
  );
}

export default Forms;
