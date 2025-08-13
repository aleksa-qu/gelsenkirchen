import { Locator, Page } from '@playwright/test';
import { MainPage } from './main-page';

export class SpecificMerchantPage extends MainPage {
  readonly merchantName: Locator;
  readonly merchantPhoneNumber: Locator;
  readonly merchantEmailAddress: Locator;
  readonly merchantHomePage: Locator;
  readonly merchantInstagramPage: Locator;
  readonly merchantLinkedInPage: Locator;
  readonly merchantTikTokPage: Locator;
  readonly openingHours: Locator;
  readonly categorieBelongToMerchant: Locator;
  readonly merchantPicture: Locator;

  constructor(page: Page) {
    super(page);
    this.merchantName = page.getByRole('heading', {
      name: 'Quantum KFZ Meisterwerkstatt',
    });
    this.merchantPhoneNumber = page
      .locator('.sticky > div > .p-0 > .space-y-4 > div > .lucide')
      .first();
    this.merchantEmailAddress = page.locator(
      '.sticky > div > .p-0 > .space-y-4 > div:nth-child(3) > .lucide'
    );
    this.merchantHomePage = page.locator('circle').nth(2);
    this.merchantInstagramPage = page.locator(
      '.sticky > div > .p-0 > .space-y-4 > div:nth-child(5) > .h-5'
    );
    this.openingHours = page.getByRole('heading', { name: 'Öffnungszeiten' });
    this.categorieBelongToMerchant = page.getByRole('heading', {
      name: 'Categories',
    });
    this.merchantPicture = page.getByRole('img', {
      name: 'Quantum KFZ Meisterwerkstatt',
    });
  }
}
