declare namespace Cypress {
  interface Chainable {
    searchAvailableFlight(): Chainable<Element>;
    getFirstAvailableFlight(): Chainable<Element>;
  }
}
