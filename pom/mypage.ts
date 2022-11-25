import { expect, Locator, Page } from "@playwright/test";


export class MyPage {


    readonly page : Page;
    readonly usernameTextBox : Locator;
    readonly passwordTextBox : Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.usernameTextBox = page.getByLabel('Username'); 
        this.passwordTextBox = page.getByLabel('Password'); 
      }
        
   async goTo(url: string) : Promise<void> {
        this.page.goto(url);
   }

}



