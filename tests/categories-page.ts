import { Locator, Page } from '@playwright/test';
import { MainPage } from './main-page';

export class CategoriesPage extends MainPage {
  readonly page1buttonC: Locator;
  readonly page2buttonC: Locator;
  readonly page3buttonC: Locator;
  readonly page78buttonC: Locator;
  readonly page79buttonC: Locator;
  readonly page80buttonC: Locator;
  readonly arrowLeftButtonC: Locator;
  readonly arrowRightButtonC: Locator;
  readonly categories: Locator;

  constructor(page: Page) {
    super(page);

    this.page1buttonC = page.getByText('1');
    this.page2buttonC = page.getByText('2', { exact: true });
    this.page3buttonC = page.getByText('3');
    this.page78buttonC = page.getByText('78');
    this.page79buttonC = page.getByText('79');
    this.page80buttonC = page.getByText('80');
    this.arrowLeftButtonC = page
      .getByRole('listitem')
      .filter({ hasText: /^$/ })
      .first();
    this.arrowRightButtonC = page.getByLabel('Next page');
    this.categories = page.getByRole('link');
  }
  async choseCategory(category: string): Promise<void> {
    const categoryLink = this.categories.filter({ hasText: category }).first();
    await categoryLink.waitFor({ state: 'visible' });
    await categoryLink.click();
  }
}
