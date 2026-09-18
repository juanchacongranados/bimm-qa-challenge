class SelectMenuPage {
  visit() {
    cy.visit("/select-menu");
  }

  verifyPageLoaded() {
    cy.contains("Select Menu").should("be.visible");
  }

  selectOldStyleOption(option) {
    cy.get("#oldSelectMenu").select(option);
  }

  verifyOldStyleOption(value) {
    cy.get("#oldSelectMenu").should("have.value", value);
  }

  selectMultipleCars(options) {
    cy.get("#cars").select(options);
  }

  verifyMultipleCars(values) {
    cy.get("#cars").invoke("val").should("deep.equal", values);
  }
}

export default new SelectMenuPage();