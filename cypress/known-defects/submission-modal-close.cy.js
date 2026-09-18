import PracticeFormPage from "../pages/PracticeFormPage";

describe("Known Defect - Submission Modal", () => {
  beforeEach(() => {
    PracticeFormPage.visit();
    PracticeFormPage.verifyPageLoaded();
  });

  it("should close the submission modal", () => {
    cy.fixture("users").then((users) => {
      const student = users.student;

      PracticeFormPage.fillFirstName(student.firstName);
      PracticeFormPage.fillLastName(student.lastName);
      PracticeFormPage.fillEmail(student.email);
      PracticeFormPage.selectGender();
      PracticeFormPage.fillMobileNumber(student.mobileNumber);

      PracticeFormPage.submitForm();
      PracticeFormPage.verifySubmissionModal();

      PracticeFormPage.closeSubmissionModal();
      PracticeFormPage.verifySubmissionModalClosed();
    });
  });
});