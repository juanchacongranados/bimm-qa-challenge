class WebTablesPage {

  visit() {
    cy.visit("/webtables");
  }

  verifyPageLoaded() {
    cy.contains("Web Tables").should("be.visible");
  }

  clickAddButton() {
    cy.get("#addNewRecordButton").click();
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

  fillAge(age) {
    cy.get("#age").type(age);
  }

  fillSalary(salary) {
    cy.get("#salary").type(salary);
  }

  fillDepartment(department) {
    cy.get("#department").type(department);
  }

  submitForm() {
    cy.get("#submit").click();
  }

  verifyUserInTable(email) {
    cy.contains(email).should("be.visible");
  }
}

export default new WebTablesPage();