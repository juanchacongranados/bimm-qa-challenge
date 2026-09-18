import PracticeFormPage from "../../pages/PracticeFormPage";

describe("Practice Form", () => {
  beforeEach(() => {
    PracticeFormPage.visit();

    PracticeFormPage.verifyPageLoaded();
  });

  it("should allow a user to fill basic student information", () => {
    cy.fixture("users").then((users) => {
      const student = users.student;

      PracticeFormPage.fillFirstName(student.firstName);

      PracticeFormPage.fillLastName(student.lastName);

      PracticeFormPage.fillEmail(student.email);

      PracticeFormPage.selectGender();

      PracticeFormPage.fillMobileNumber(student.mobileNumber);

      PracticeFormPage.submitForm();

      PracticeFormPage.verifySubmissionModal();

      PracticeFormPage.verifySubmittedStudent(student);
    });
  });

  it("should show validation error for an invalid email format", () => {
    PracticeFormPage.fillFirstName("Juan");

    PracticeFormPage.fillLastName("Chacon");

    PracticeFormPage.fillEmail("invalid-email");

    PracticeFormPage.selectGender();

    PracticeFormPage.fillMobileNumber("9876543210");

    PracticeFormPage.submitForm();

    PracticeFormPage.verifyInvalidEmailState();
  });

  it("should highlight required fields when submitting an empty form", () => {
    PracticeFormPage.submitForm();

    PracticeFormPage.verifyRequiredFieldsState();
  });
});
