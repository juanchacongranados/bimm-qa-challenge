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

  selectDateOfBirth(month, year, day) {
    cy.get("#dateOfBirthInput").click();

    cy.get(".react-datepicker__year-select").select(year.toString());

    cy.get(".react-datepicker__month-select").select(month);

    cy.get(".react-datepicker__day")
      .not(".react-datepicker__day--outside-month")
      .contains(new RegExp(`^${day}$`))
      .click();
  }

  submitForm() {
    cy.safeClick("#submit");
  }

  verifySubmissionModal() {
    cy.contains("Thanks for submitting the form").should("be.visible");
  }

  verifySubmissionModalNotDisplayed() {
  cy.contains("Thanks for submitting the form").should("not.exist");
  }

  verifySubmittedStudent(student) {
  cy.get(".table-responsive").within(() => {
    cy.contains("Student Name")
      .parent()
      .should("contain", `${student.firstName} ${student.lastName}`);

    cy.contains("Student Email")
      .parent()
      .should("contain", student.email);

    cy.contains("Mobile")
      .parent()
      .should("contain", student.mobileNumber);
  });
  }

  closeSubmissionModal() {
  cy.get("#closeLargeModal")
    .should("be.visible")
    .click();
}

verifySubmissionModalClosed() {
  cy.get(".modal-content").should("not.exist");
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
