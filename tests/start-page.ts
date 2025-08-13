import { Locator, Page } from '@playwright/test';
import { SERVICE_URL } from '../config/env-data';
import { MainPage } from './main-page';

export class StartPage extends MainPage {
  readonly url: string = SERVICE_URL;
  readonly categories: Locator;
  readonly discoverAllCategories: Locator;
  readonly cathegory1: Locator;
  readonly cathegory2: Locator;
  readonly cathegory3: Locator;
  readonly cathegory4: Locator;

  constructor(page: Page) {
    super(page);
    this.categories = page.getByRole('heading', { name: 'Kategorien' });
    this.discoverAllCategories = page.getByRole('link', {
      name: 'Discover all categories All',
    });
    this.cathegory1 = page.getByRole('link');
    this.cathegory2 = page.getByRole('link');
    this.cathegory3 = page.getByRole('link');
    this.cathegory4 = page.getByRole('link');
  }

  async open() {
    await this.page.goto(this.url);
  }
}
