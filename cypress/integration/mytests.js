describe("MyPizzaApp", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("is this thing on?", () => {
    expect(1 + 1).to.equal(2);
  });

  //Consts Forms//
  // const inputSelectSize = () =>
  //   cy.get("select").select("size").should("have.value", "Original Red"); // How to check this
  //const checks =() =>cy.get('')
  const allCheckBoxes = () => cy.get('input[name="topping"]');
  const pepCheck = () => cy.get('input[label="Pepperoni"]');
  const sauCheck = () => cy.get('input[label="Sausage"]');
  const spiSauCheck = () => cy.get('input[label="Spicy Italian Sausage"]');
  const substitute = () => cy.get('input[label="GF"]');
  const instructions = () => cy.get('input[name="instructions"]');
  const canadianBacon = () => cy.get('input[label="Canadian Bacon"]');
  const grilledChickCheck = () => cy.get('input[label="Grilled Chicken"]');
  const greenPepCheck = () => cy.get('input[label="Green Peppers"]');
  const onionCheck = () => cy.get('input[label="Onions"]');
  const dicTomatosCheck = () => cy.get('input[label="Diced Tomatoes');
  const blackOlivCheck = () => cy.get('input[label="Black Olives');
  const roastGarCheck = () => cy.get('input[label="Roasted Garlic"]');
  const artichokeHeartsCheck = () => cy.get('input[label="Artichoke Hearts"]');
  const threeCheeseCheck = () => cy.get('input[label="Three Cheese"]');
  const pineapple = () => cy.get('input[label="Pineapple"]');
  const xCheese = () => cy.get('input[label="xCheese"]');
  const smallPizza = () => cy.get("select").select("Small");
  const mediumPizza = () => cy.get("select").select("Medium");
  const largePizza = () => cy.get("select").select("Large");
  const origRed = () => cy.get('[type="radio"]').check("Original Red");
  const garlicRanch = () => cy.get('[type="radio"]').check("Garlic Ranch");
  const bbqSauce = () => cy.get('[type="radio"]').check("Bbq Sauce");
  const spinach = () => cy.get('[type="radio"]').check("Bbq Sauce");

  it("Checks if elements are there", () => {
    allCheckBoxes().should("exist");
    pepCheck().should("exist");
    sauCheck().should("exist");
    spiSauCheck().should("exist");
    canadianBacon().should("exist");
    grilledChickCheck().should("exist");
    onionCheck().should("exist");
    greenPepCheck().should("exist");
    dicTomatosCheck().should("exist");
    roastGarCheck().should("exist");
    blackOlivCheck().should("exist");
    artichokeHeartsCheck().should("exist");
    threeCheeseCheck().should("exist");
    pineapple().should("exist");
    xCheese().should("exist");
    substitute().should("exist");
    instructions().should("exist");
    smallPizza().should("exist");
    mediumPizza().should("exist");
    largePizza().should("exist");
    origRed().should("exist");
    garlicRanch().should("exist");
    bbqSauce().should("exist");
    spinach().should("exist");
  });

  it("Writing instructions", () => {
    instructions().type("hello");
  });

  it("adds things to the pizza", () => {
    allCheckBoxes().check();
  });
});
