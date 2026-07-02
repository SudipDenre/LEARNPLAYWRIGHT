import {test, expect} from '@playwright/test'

test("Verify that the title will be TTACart", async ({page})=>{
  await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
  await expect(page).toHaveTitle("TTACart - Login");
  await page.waitForTimeout(5000);
});

test("Verify error message for invalid login credentials", async ({page})=>{
  await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
  await page.fill("#user-name", "invalid_user");
  await page.fill("#password", "wrong_password");
  await page.click("#login-button");
  await expect(page.locator('[data-test="error"]')).toHaveText("Epic sadface: Username and password do not match any user in this service");
})
