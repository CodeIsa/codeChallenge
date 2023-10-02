const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://airmalta.com/",
    viewportWidth: 1440, // Default viewport width
    viewportHeight: 990, // Default viewport height
    defaultCommandTimeout: 15000, // Default command timeout in milliseconds
    requestTimeout: 10000,
    responseTimeout: 10000,
    chromeWebSecurity: false, // Disable Chrome's web security for testing external content
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
