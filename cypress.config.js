const { defineConfig } = require("cypress");
//const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  projectId: 'qjkszx',
  e2e: {
      baseUrl: 'http://www.automationpractice.pl',

  
    setupNodeEvents(on, config) {
      //allureWriter(on, config);
      allureCypress(on);
      return config;
    },
  },

  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/screenshots',
  video: true,
  videoCompression: false,
  videosFolder: 'cypress/videos',
  defaultCommandTimeout: 10000
})
