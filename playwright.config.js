// @ts-check
import { defineConfig, devices, expect } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout: 50*1000,
  expect:{
    timeout:51000,
  },
  reporter: 'html',
  // reporter: [
  //   ['line'],
  //   ['allure-playwright']
  // ],
  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
    // screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },

});

module.exports = config;
