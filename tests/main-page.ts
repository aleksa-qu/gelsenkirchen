import { Locator, Page } from '@playwright/test';
import { BasePage } from './base-page';

export class MainPage extends BasePage {
  readonly searchField: Locator;
  readonly mainMessageOfSite: Locator;

  constructor(page: Page) {
    super(page);
    this.searchField = page.getByRole('textbox', { name: 'Händler suchen...' });
    this.mainMessageOfSite = page.getByRole('heading', {
      name: 'Ganz nah in Gelsenkirchen,',
    });
  }
}
