describe("Getting the fisrt available flight", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should get the first available flight", () => {
    cy.searchAvailableFlight();
    cy.getFirstAvailableFlight();
  });
});
