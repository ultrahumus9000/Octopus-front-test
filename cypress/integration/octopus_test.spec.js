describe("My First Test", () => {
  it("Increases the quantity of a product", () => {
    cy.visit("localhost:3000");
    cy.get(".increase-btn").first().should("be.visible");
    cy.get(".increase-btn").first().click();
    cy.get(".qty").first().should("be.visible");
    cy.get(".qty").first().contains("2");
  });

  it("Decreases the quantity of a product", () => {
    cy.visit("localhost:3000");
    cy.get(".decrease-btn").first().should("be.visible");
    cy.get(".decrease-btn").first().click();
    cy.get(".qty").first().should("be.visible");
    cy.get(".qty").first().contains("0");
  });

  it("Adds items to the shopping cart", () => {
    cy.visit("localhost:3000");
    cy.get(".add-btn").first().click();
    cy.get(".total-quantity").should("be.visible");
    //cart items will appear on the screen once add to cart button is clicked
  });
});
