Cypress.Commands.add("safeClick", (selector) => {
  cy.get(selector)
    .scrollIntoView()
    .should("be.visible")
    .click();
});