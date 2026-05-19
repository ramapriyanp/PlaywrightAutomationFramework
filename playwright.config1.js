// @ts-check
import { defineConfig, devices, expect } from '@playwright/test';
import { permission } from 'node:process';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout: 50*1000,
  expect:{
    timeout:51000,
  },
  retries: 1,
  workers: 3,
  reporter: 'html',
  // reporter: [
  //   ['line'],
  //   ['allure-playwright']
  // ],
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        headless: false,
        screenshot: 'on',
        // screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
        // viewport : { width: 720, height: 720 },
        ignoreHTTPSErrors: true,
        permissions: ['geolocation'],
      },
    },
    {
      name: 'safari',
      use: {
        browserName: 'webkit',
        headless: false,
        screenshot: 'on',
        // screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
        ...devices['iPhone 11'],
      },
    },
  ]
});

module.exports = config;
