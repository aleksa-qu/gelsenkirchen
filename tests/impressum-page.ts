import { Locator, Page } from '@playwright/test';
import { BasePage } from './base-page';

export class ImpressumPage extends BasePage {
  readonly impressumTitle: Locator;
  readonly contact: Locator;
  readonly taxID: Locator;
  readonly representator: Locator;
  readonly consumerDisputeResolution: Locator;

  constructor(page: Page) {
    super(page);
    this.impressumTitle = page.getByRole('heading', { name: 'Impressum' });
    this.contact = page.getByRole('heading', { name: 'Kontakt' });
    this.taxID = page.getByRole('heading', { name: 'Umsatzsteuer-ID' });
    this.representator = page.getByRole('heading', { name: 'Vertreten durch' });
    this.consumerDisputeResolution = page.getByRole('heading', {
      name: 'Verbraucherstreitbeilegung/',
    });
  }
}
