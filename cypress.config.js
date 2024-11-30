const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: 2,
  defaultCommandTimeout: 60000,
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://react-email-editor-demo.netlify.app",
    reporter: "mochawesome",
    "reporterOptions": {
    "reportDir": "cypress/reports",
    "overwrite": true,
    "html": true,
    "json": true
  }
  },
});
