Cypress.Commands.add("searchAvailableFlight", () => {
  cy.get('input[value="Round trip"]').click();
  cy.get('.select-option.ellipsis:contains("One way")').click();

  //field: Departing from
  cy.get(".route-selection-origin div .ellipsis", { timeout: 5000 }).click();
  cy.get('input[placeholder="Search airport"]', { timeout: 10000 })
    .invoke("css", "transition", "none")
    .should("be.visible")
    .type("Vienna");
  cy.get('div.airport-name.ellipsis:contains("Vienna International")').click();

  //field: Flying to
  cy.get(".route-selection-destination div .ellipsis", {
    timeout: 5000,
  }).click();
  cy.get('input[placeholder="Search airport"]', { timeout: 10000 })
    .invoke("css", "transition", "none")
    .should("be.visible")
    .type("Malta");
  cy.get(
    'div.airport-name.ellipsis:contains("Malta International Airport")'
  ).click();

  //Departure date
  cy.get('.startDate>input[name="DepartureDate1"]').click();
  cy.get(".DayPicker-Month").should("be.visible");
  cy.get('.DayPicker-Month .DayPicker-Week>div[aria-label="Wed Nov 01 2023"]', {
    timeout: 10000,
  }).click();

  //Submit button
  cy.get('.input-holder.buttons>button[type="submit"]')
    .should("be.enabled")
    .click();

  cy.intercept("https://book.airmalta.com/api/flightSearch/itineraryPart").as(
    "getRequest"
  );
  cy.wait("@getRequest").its("response.statusCode").should("eq", 200);
  cy.contains("Outbound Flight").should("be.visible");
});

Cypress.Commands.add("getFirstAvailableFlight", () => {
  cy.contains("Flexible dates").click();
  cy.contains("Outbound").should("be.visible");
  cy.get('button[type="button"]:contains("Continue to flights")').click();

  cy.get('div[type="Warning"] ~ div')
    .children("div")
    .eq(4)
    .contains("Economy")
    .click();

  cy.get('div:contains("Go Light")')
    .siblings('div:contains("Select")')
    .eq(0)
    .click();
  cy.contains("Selected").should("be.visible");

  cy.get('button[type="button"]:contains("Continue")').click();
  cy.contains("Continue").click();
  cy.contains("Passenger Details").should("be.visible");

  cy.get('div:contains("Wed, Nov 1, 2023")').should("be.visible");
});
