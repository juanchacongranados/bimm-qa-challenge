class AlertsPage {
  visit() {
    cy.visit("/alerts");
  }

  verifyPageLoaded() {
    cy.contains("Alerts").should("be.visible");
  }

  clickAlertButton() {
    cy.get("#alertButton").click();
  }

  clickConfirmButton() {
    cy.get("#confirmButton").click();
  }

  clickPromptButton() {
    cy.get("#promtButton").click();
  }

  verifyConfirmResult(message) {
    cy.get("#confirmResult").should("contain", message);
  }

  verifyPromptResult(message) {
    cy.get("#promptResult").should("contain", message);
  }
}

export default new AlertsPage();
