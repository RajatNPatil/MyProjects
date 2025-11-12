// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'console';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config= ({
  testDir: './tests',
  timeout: 40000,
  expect: {timeout: 5000},
  reporter: 'html',
  use: {

    headless: false,
    screenshot : 'on',
    trace: 'retain-on-failure',  //off, on

   // browserName: 'webkit'   //safari
    browserName: 'chromium'
    //browserName: 'firefox'
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  },



});
module.exports= config

