const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'qjkszx',
  e2e: {
      baseUrl: 'http://www.automationpractice.pl',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/screenshots',
  video: true,
  videoCompression: false,
  videosFolder: 'cypress/videos',
  defaultCommandTimeout: 10000
})
