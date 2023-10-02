import "./commands";
import "./custom-commands";

Cypress.on("uncaught:exception", (err, runnable) => {
  // Prevent Cypress from failing the test
  return false;
});
