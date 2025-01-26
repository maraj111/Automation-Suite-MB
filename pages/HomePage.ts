import { Page, Locator } from "@playwright/test";

export class HomePage {
    private page: Page;
    private nameInput: Locator;
    private emaildInput: Locator;
    private phoneInput: Locator;
    private subjectInput: Locator;
    private descriptionInput: Locator;
    private submitButton: Locator;
    public thanksMessage: Locator;
    public errorMessage: Locator;
    public links: Locator;

    constructor(page: Page) {
      this.page = page;
      this.nameInput = this.page.getByTestId('ContactName'); 
      this.emaildInput = page.getByTestId('ContactEmail');
      this.phoneInput = page.getByTestId('ContactPhone');
      this.subjectInput = page.getByTestId('ContactSubject');
      this.descriptionInput = page.getByTestId('ContactDescription');
      this.submitButton = page.getByRole('button', { name: 'Submit' });
      this.thanksMessage = page.getByRole('heading', { name: 'Thanks for getting in touch' });
      this.errorMessage = page.locator('xpath=//div[@class="alert alert-danger"]');
      this.links = page.locator('a');
     
    }
  
     
    async open() {
      await this.page.goto('https://automationintesting.online/');
    }

    /*async enterName(name: string) {
      await this.nameInput.fill(name);
    }   


    async enterEmail(email: string) {
      await this.emaildInput.fill(email);
    }

    async enterPhone(phone: string) {
      await this.phoneInput.fill(phone);
    }

    async enterSubject(subject: string) {
      await this.subjectInput.fill(subject);
    }

    async enterDescription(description: string) {
      await this.descriptionInput.fill(description);
    }

    async clickSubmitButton() {
      await this.submitButton.click();
    } */
    
    async enterUserDetails(name: string, email: string, phone: string, subject: string, description: string) {
      await this.nameInput.fill(name);
      await this.emaildInput.fill(email);
      await this.phoneInput.fill(phone);
      await this.subjectInput.fill(subject);
      await this.descriptionInput.fill(description);
      await this.submitButton.click();
    }

    async isThanksMessageVisible() {
      await this.thanksMessage.isVisible();
    }

    async isErrorMessageVisible() {
      await this.errorMessage.isVisible();
    }   

    async getAllLinks(page: Page) {
      await page.goto('https://automationintesting.online/');
      const links = await page.$$eval('a', anchors => anchors.map(anchor => anchor.href));
      links.forEach(link => console.log(link));            
    }
  }
