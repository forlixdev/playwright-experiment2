import { test, expect } from '@playwright/test';
import { MyPage } from '../pom/mypage';

test('test 1', async ({ page }) => {
  var pg = new MyPage(page);  
  pg.goTo("https://the-internet.herokuapp.com/login");
  await pg.usernameTextBox.fill("lucio");
  let val = (await pg.usernameTextBox.innerText()).valueOf()
  await expect(await val).toContain("lucio");


});
