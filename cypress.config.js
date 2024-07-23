const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1000,
  viewportWidth: 1500,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    json: false,
    //reportDir: 'cypresslesson/dosyaPath',
    reportFilename: 'testResult',
    overwrite: false,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
    specPattern: 'cypress/e2e/**/*.{js, jsx, ts, tsx}',
    experimentalStudio: true
  },
});
