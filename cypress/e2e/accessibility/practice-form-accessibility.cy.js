import PracticeFormPage from "../../pages/PracticeFormPage";

describe("Practice Form Accessibility", () => {
  beforeEach(() => {
    PracticeFormPage.visit();

    PracticeFormPage.verifyPageLoaded();

    cy.injectAxe();
  });

  it("should not have critical accessibility violations", () => {
    cy.checkA11y(
      null,
      {
        includedImpacts: ["critical"],
      },
      null,
      true,
    );
  });
});
