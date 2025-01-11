const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  viewportHeight: 1080,
  viewportWidth: 1440,
  env: {
    URL: "http://localhost:3000/",
  },
});
