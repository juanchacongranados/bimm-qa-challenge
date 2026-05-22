import WebTablesPage from "../../pages/WebTablesPage";

describe("Web Tables", () => {

  beforeEach(() => {
    WebTablesPage.visit();

    WebTablesPage.verifyPageLoaded();
  });

  it("should add a new user to the table", () => {

    WebTablesPage.clickAddButton();

    WebTablesPage.fillFirstName("Juan");

    WebTablesPage.fillLastName("Chacon");

    WebTablesPage.fillEmail("juan@test.com");

    WebTablesPage.fillAge("30");

    WebTablesPage.fillSalary("5000");

    WebTablesPage.fillDepartment("QA");

    WebTablesPage.submitForm();

    WebTablesPage.verifyUserInTable("juan@test.com");
  });
});