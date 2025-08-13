import { Locator, Page } from '@playwright/test';

export abstract class BasePage {
  readonly page: Page;
  readonly logoHeader: Locator;
  readonly logoFooter: Locator;
  readonly categoriesHeader: Locator;
  readonly merchantsHeader: Locator;
  readonly impressum: Locator;
  readonly footerName: Locator;

  protected constructor(page: Page) {
    this.page = page;
    this.logoHeader = page.getByRole('link', {
      name: 'gelsenkirchen-libersave .de',
    });
    this.logoFooter = page
      .getByRole('contentinfo')
      .getByText('gelsenkirchen-libersave');
    this.categoriesHeader = page.getByRole('link', { name: 'Kategorien' });
    this.merchantsHeader = page.getByRole('link', {
      name: 'Händler',
      exact: true,
    });
    this.impressum = page.getByRole('link', { name: 'Impressum' });
    this.footerName = page.getByText('Copyright © 2025 Libersave');
  }
}
