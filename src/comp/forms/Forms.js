import React from "react";
import Nav from "../homepage/nav/Nav";
import Input from "./Input";
import "./styleForm.css";

function Forms() {
  return (
    <div>
      <Nav />
      <h1 className="byop">Build Your Own Pizza</h1>

      <div className="buildYourOwn">
        <div className="coverForm"></div>
      </div>
      <form>
        <h2>Choice of Size</h2>
        <p>Required</p>
        <select>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <h2>Choice of Sauce</h2>
        <p>Required</p>
        <label name="red">Original Red</label>
        <input name="red" type="radio" />
        <label name="garlic">Garlic Ranch</label>
        <input name="garlic" type="radio" />
        <label name="bbq">BBQ Sauce</label>
        <input name="bbq" type="radio" />
        <label name="spinach">Spinach Alfredo</label>
        <input name="spinach" type="radio" />

        <h2>Add Toppings</h2>
        <p>Choose What You Would Like </p>
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
      </form>
    </div>
  );
}

export default Forms;
