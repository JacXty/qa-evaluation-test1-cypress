const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Aquí podrías agregar plugins si usas
    },
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/test.cy.js',
  },
  env: {
    url: 'https://demo.testim.io',
    title: 'Space & Beyond | Testim.io demo'
  }
});