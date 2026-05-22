class PracticeFormPage {
  visit() {
    cy.visit("/automation-practice-form");
  }

  verifyPageLoaded() {
    cy.contains("Practice Form").should("be.visible");
  }

  fillFirstName(firstName) {
    cy.get("#firstName").type(firstName);
  }

  fillLastName(lastName) {
    cy.get("#lastName").type(lastName);
  }

  fillEmail(email) {
    cy.get("#userEmail").type(email);
  }

  selectGender() {
    cy.contains("label", "Male").click();
  }

  fillMobileNumber(mobileNumber) {
    cy.get("#userNumber").type(mobileNumber);
  }

  submitForm() {
    cy.safeClick("#submit");
  }

  verifySubmissionModal() {
    cy.contains("Thanks for submitting the form").should("be.visible");
  }

  verifyInvalidEmailState() {
    cy.get("#userEmail:invalid").should("exist");
  }

  verifyRequiredFieldsState() {
    cy.get("#firstName:invalid").should("exist");

    cy.get("#lastName:invalid").should("exist");

    cy.get("#userNumber:invalid").should("exist");
  }
}

export default new PracticeFormPage();
