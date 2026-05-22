const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',

    defaultCommandTimeout: 8000,
    pageLoadTimeout: 10000,

    viewportWidth: 1440,
    viewportHeight: 900,

    video: false,
    screenshotOnRunFailure: true,
  },
})