// @ts-check
// import { defineConfig, devices, expect } from '@playwright/test';
const { defineConfig } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
// const Config = ({
module.exports = defineConfig({
  testDir: './tests',
  timeout: 50*1000,
  expect:{
    timeout:51000,
  },
  // reporter: 'html',
  // reporter: [
  //   ['line'],
  //   ['allure-playwright']
  // ],

  reporter: [
    ['html', {
      outputFolder: 'playwright-report',
      open: 'never'
    }],
    ['line'],
    ['allure-playwright']
  ],

  use: {
    browserName: 'chromium',
    headless: true,
    screenshot: 'on',
    // screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },

});

// module.exports = Config;
