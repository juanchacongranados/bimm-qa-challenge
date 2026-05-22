import AlertsPage from "../../pages/AlertsPage";

describe("Alerts", () => {
  beforeEach(() => {
    AlertsPage.visit();

    AlertsPage.verifyPageLoaded();
  });

  it("should display a browser alert", () => {
    cy.on("window:alert", (text) => {
      expect(text).to.equal("You clicked a button");
    });

    AlertsPage.clickAlertButton();
  });

  it("should accept a confirmation alert", () => {
    cy.on("window:confirm", () => true);

    AlertsPage.clickConfirmButton();

    AlertsPage.verifyConfirmResult("You selected Ok");
  });

  it("should enter text into a prompt alert", () => {
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("Juan");
    });

    AlertsPage.clickPromptButton();

    AlertsPage.verifyPromptResult("Juan");
  });
});
