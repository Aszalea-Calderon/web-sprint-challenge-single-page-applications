import React, { useState } from "react";
import Nav from "../homepage/nav/Nav";
import * as Yup from "yup";
import "./styleForm.css";

function Forms() {
  //Button-- Disable here
  //const [buttonDisabled, setButtonDisabled] = useState(false)

  // let formSchema = Yup.object().shape({
  //   size:Yup.string().required("One Option is required")
  // });

  //Initalize State
  const defaultState = {
    size: "",
    sauce: "",
    topping: "",
    substitute: "",
    instructions: "",
  };

  const [pizzaForm, setPizzaForm] = useState(defaultState);

  const change = (e) => {
    console.log("input Changed!", e.target.value);
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setPizzaForm({
      ...pizzaForm,
      [e.target.name]: value,
    });
  };

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
        <select name="select" onChange={change}>
          <option name="null" value="0" label="Choose Your Size">
            -Choose Your Size-
          </option>
          <option name="size" id="small" value="small" label="Small">
            Small
          </option>
          <option name="size" id="Medium" value="medium">
            Medium
          </option>
          <option name="size" id="Large" value="large">
            Large
          </option>
        </select>
        {/* Sauce */}
        <h2 className="pizHead">Choice of Sauce</h2>
        <p>Required</p>
        <label htmlFor="Original Red">Original Red</label>
        <input
          onChange={change}
          name="sauce"
          type="radio"
          value="Original Red"
          label="Original Red"
        />
        <label htmlFor="Garlic Ranch">Garlic Ranch</label>
        <input
          onChange={change}
          name="sauce"
          type="radio"
          value="Garlic Ranch"
          label="Garlic Ranch"
        />
        <label htmlFor="Bbq Sauce">BBQ Sauce</label>
        <input
          onChange={change}
          name="sauce"
          type="radio"
          value="Bbq Sauce"
          label="Bbq Sauce"
        />
        <label htmlFor="Spinach">Spinach Alfredo</label>
        <input
          onChange={change}
          name="sauce"
          type="radio"
          value="Spinach"
          label="Spinach"
        />
        {/* Toppings */}
        <h2 className="pizHead">Add Toppings</h2>
        <p>Choose What You Would Like- </p>
        <label htmlFor="Pepperoni">Pepperoni</label>
        <input
          onChange={change}
          name="topping"
          type="checkbox"
          value="Pepperoni"
          label="Pepperoni"
        />
        <label htmlFor="Sausage">Sausage</label>
        <input
          onChange={change}
          name="topping"
          label="Sausage"
          type="checkbox"
          value="Sausage"
        />
        <label htmlFor="Canadian Bacon">Canadian Bacon</label>
        <input
          onChange={change}
          name="topping"
          value="Canadian Bacon"
          type="checkbox"
          label="Canadian Bacon"
        />
        <label htmlFor="Spicy Italian Sausage">Spicy Italian Sausage</label>
        <input
          onChange={change}
          name="topping"
          type="checkbox"
          value="Spicy Italian Sausage"
          label="Spicy Italian Sausage"
        />
        <label htmlFor="Grilled Chicken">Grilled Chicken</label>
        <input
          onChange={change}
          name="topping"
          type="checkbox"
          value="Grilled Chicken"
          label="Grilled Chicken"
        />
        <label htmlFor="Onions">Onions</label>
        <input
          onChange={change}
          name="topping"
          type="checkbox"
          value="Onions"
          label="Onions"
        />
        <label htmlFor="Green peppers">Green peppers</label>
        <input
          onChange={change}
          name="topping"
          type="checkbox"
          value="Green Peppers"
          label="Green Peppers"
        />
        <label htmlFor="Diced Tomatoes">Diced Tomatoes</label>
        <input
          onChange={change}
          name="topping"
          type="checkbox"
          value="Diced Tomatoes"
          label="Diced Tomatoes"
        />
        <label htmlFor="Black Olives">Black Olives</label>
        <input
          onChange={change}
          name="topping"
          type="checkbox"
          value="Black Olives"
          label="Black Olives"
        />
        <label htmlFor="Roasted Garlic">Roasted Garlic</label>
        <input
          onChange={change}
          name="topping"
          type="checkbox"
          value="Roasted Garlic"
          label="Roasted Garlic"
        />
        <label htmlFor="Artichoke Hearts">Artichoke Hearts</label>
        <input
          onChange={change}
          name="topping"
          type="checkbox"
          value="Artichoke Hearts"
          label="Artichoke Hearts"
        />
        <label htmlFor="Three Cheese">Three Cheese</label>
        <input
          onChange={change}
          name="topping"
          type="checkbox"
          value="Three Cheese"
          label="Three Cheese"
        />
        <label htmlFor="Pineapple">Pineapple</label>
        <input
          onChange={change}
          name="topping"
          type="checkbox"
          value="Pineapple"
          label="Pineapple"
        />
        <label htmlFor="Extra Cheese">Extra Cheese</label>
        <input
          onChange={change}
          name="topping"
          type="checkbox"
          value="Extra Cheese"
          label="xCheese"
        />
        {/*substitute*/}
        <h2 className="pizHead">Substitute</h2>
        <p>Choose up to 1</p>
        Gluten free Crust
        <label className="switch">
          <input
            onChange={change}
            name="substitute"
            type="checkbox"
            label="GF"
            value="GF"
          />
          <span className="slider round"></span>(+ $1)
        </label>
        <h2 className="pizHead">Special Instructions</h2>
        <label>
          <input
            onChange={change}
            type="text"
            name="instructions"
            placeholder="Extra sauce?"
            label="special"
          />
        </label>
        <h2>Anything else?</h2>
        <p className="text">Total:4$</p>
        <button className="add">Add To order</button>
      </form>
    </div>
  );
}

export default Forms;
//Add button disabled functonality
//Adding up total
