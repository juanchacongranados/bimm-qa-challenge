import SelectMenuPage from "../../pages/SelectMenuPage";

describe("Select Menu", () => {
  beforeEach(() => {
    SelectMenuPage.visit();
    SelectMenuPage.verifyPageLoaded();
  });

  it("should select an option from the old style select menu", () => {
    SelectMenuPage.selectOldStyleOption("Purple");

    SelectMenuPage.verifyOldStyleOption("4");
  });

  it("should select multiple options from the standard multi select", () => {
    SelectMenuPage.selectMultipleCars(["Volvo", "Audi"]);

    SelectMenuPage.verifyMultipleCars(["volvo", "audi"]);
  });
});