import PracticeFormPage from "../pages/PracticeFormPage";

describe("Known Defect - Future Date of Birth", () => {
  beforeEach(() => {
    PracticeFormPage.visit();
    PracticeFormPage.verifyPageLoaded();
  });

  it("should reject a future date of birth", () => {
    cy.fixture("users").then((users) => {
      const student = users.student;

      PracticeFormPage.fillFirstName(student.firstName);
      PracticeFormPage.fillLastName(student.lastName);
      PracticeFormPage.fillEmail(student.email);
      PracticeFormPage.selectGender();
      PracticeFormPage.fillMobileNumber(student.mobileNumber);

      PracticeFormPage.selectDateOfBirth("September", 2027, 18);

      cy.get("#dateOfBirthInput")
        .should("have.value", "18 Sep 2027");

      PracticeFormPage.submitForm();

      PracticeFormPage.verifySubmissionModalNotDisplayed();
    });
  });
});