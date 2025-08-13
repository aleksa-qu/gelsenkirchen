import { Locator, Page } from '@playwright/test';
import { MainPage } from './main-page';

export class MerchantsPage extends MainPage {
  readonly filterMerchants: Locator;
  readonly allCategoriesDropDown: Locator;
  readonly resetFiltersButton: Locator;
  readonly ratingSlider: Locator;
  readonly ratingSliderLine: Locator;
  readonly closeFilterButton: Locator;
  readonly page1buttonM: Locator;
  readonly page2buttonM: Locator;
  readonly page3buttonM: Locator;
  readonly page1203buttonM: Locator;
  readonly page1204buttonM: Locator;
  readonly page1205buttonM: Locator;
  readonly arrowLeftButtonM: Locator;
  readonly arrowRightButtonM: Locator;
  readonly merchantsFoundText: Locator;
  readonly minimumRating: Locator;
  readonly categoryFromDropDown: Locator;
  readonly merchants: Locator;

  constructor(page: Page) {
    super(page);
    this.filterMerchants = page
      .getByRole('button')
      .filter({ hasText: /^$/ })
      .nth(1);
    this.allCategoriesDropDown = page.getByRole('combobox', {
      name: 'Category',
    });
    this.resetFiltersButton = page.getByRole('button', {
      name: 'Reset Filters',
    });
    this.ratingSlider = page.getByRole('slider');
    this.ratingSliderLine = page
      .locator('div')
      .filter({ hasText: /^Minimum Rating: 0$/ })
      .locator('span')
      .nth(1);
    this.closeFilterButton = page.getByRole('button', { name: 'Close' });
    this.categoryFromDropDown = page.getByText('Sparkasse', { exact: true });
    this.page1buttonM = page.getByText('1', { exact: true });
    this.page2buttonM = page.getByText('2', { exact: true });
    this.page3buttonM = page.getByText('3', { exact: true });
    this.page1203buttonM = page.getByText('1203', { exact: true });
    this.page1204buttonM = page.getByText('1204', { exact: true });
    this.page1205buttonM = page.getByText('1205', { exact: true });
    this.arrowLeftButtonM = page
      .getByRole('listitem')
      .filter({ hasText: /^$/ })
      .first();
    this.arrowRightButtonM = page.getByLabel('Next page');
    this.merchantsFoundText = page.getByText('merchants found');
    this.minimumRating = page.getByText('Minimum Rating:');
    this.merchants = page.getByRole('link');
  }
  async setRating(value: number) {
    const box = await this.ratingSlider.boundingBox();
    if (box) {
      const { x, y, width, height } = box;
      const totalSteps = 5;
      const stepWidth = width / totalSteps;
      const targetX = x + stepWidth * value;
      const centerY = y + height / 2;

      await this.page.mouse.move(x + 1, centerY);
      await this.page.mouse.down();
      await this.page.mouse.move(targetX, centerY, { steps: 10 });
      await this.page.mouse.up();
    }
  }

  async choseMerchant(merchantName: string): Promise<void> {
    const merchantLink = this.merchants
      .filter({ hasText: merchantName })
      .first();
    await merchantLink.waitFor({ state: 'visible' });
    await merchantLink.click();
  }
}
