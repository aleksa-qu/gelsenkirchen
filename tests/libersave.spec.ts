import { test, expect } from '@playwright/test';
import { StartPage } from './start-page';
import { MerchantsPage } from './merchants-page';
import { CategoriesPage } from './categories-page';
import { ImpressumPage } from './impressum-page';
import { SpecificMerchantPage } from './specific-merchant-page';

let homePage: StartPage;

test.beforeEach(async ({ page }) => {
  homePage = new StartPage(page);
  await homePage.open();
});

test('all items on the start page are visible', async ({ page }) => {
  await expect.soft(homePage.logoHeader).toBeVisible();
  await expect
    .soft(homePage.logoHeader)
    .toHaveText('gelsenkirchen-libersave.de');
  await expect.soft(homePage.categoriesHeader).toBeVisible();
  await expect.soft(homePage.categoriesHeader).toHaveText('Kategorien');
  await expect.soft(homePage.merchantsHeader).toBeVisible();
  await expect.soft(homePage.merchantsHeader).toHaveText('Händler');
  await expect.soft(homePage.searchField).toBeVisible();
  await expect.soft(homePage.mainMessageOfSite).toBeVisible();
  await expect
    .soft(homePage.mainMessageOfSite)
    .toHaveText('Ganz nah in Gelsenkirchen, PLZ, Stadtteil, Straße...');
  await expect.soft(homePage.categories).toBeVisible();
  await expect.soft(homePage.categories).toHaveText('Kategorien');
  await expect.soft(homePage.discoverAllCategories).toBeVisible();
  await expect
    .soft(homePage.discoverAllCategories)
    .toHaveText('Discover all categoriesAll categories→');
  await expect.soft(homePage.logoFooter).toBeVisible();
  await expect.soft(homePage.logoFooter).toHaveText('gelsenkirchen-libersave');
  await expect.soft(homePage.footerName).toBeVisible();
  await expect
    .soft(homePage.footerName)
    .toHaveText('Copyright © 2025 Libersave GmbH. All rights reserved.');
  await expect.soft(homePage.impressum).toBeVisible();
  await expect.soft(homePage.impressum).toHaveText('Impressum');
});

test('chose category and rating on the merchants page and reset it', async ({
  page,
}) => {
  await homePage.merchantsHeader.click();
  const merchantsPage = new MerchantsPage(page);
  await expect.soft(merchantsPage.filterMerchants).toBeVisible();
  await merchantsPage.filterMerchants.click();
  await merchantsPage.allCategoriesDropDown.click();
  await merchantsPage.categoryFromDropDown.click();
  await merchantsPage.setRating(3);
  await merchantsPage.closeFilterButton.click();
  await expect
    .soft(merchantsPage.merchantsFoundText)
    .toHaveText('19 merchants found');
  await merchantsPage.filterMerchants.click();
  await merchantsPage.resetFiltersButton.click();
  await expect
    .soft(merchantsPage.allCategoriesDropDown)
    .toHaveText('All Categories');
  await expect
    .soft(merchantsPage.minimumRating)
    .toHaveText('Minimum Rating: 0');
});

test('chose a category from the list and get back to main page', async ({
  page,
}) => {
  await homePage.categoriesHeader.click();
  const categoriesPage = new CategoriesPage(page);
  await categoriesPage.choseCategory('Supermarkt');
  const merchantsPage = new MerchantsPage(page);
  await expect
    .soft(merchantsPage.merchantsFoundText)
    .toHaveText('80 merchants found');
  await merchantsPage.logoHeader.click();
  const startPage = new StartPage(page);
  await expect.soft(startPage).toBeTruthy();
});

test('chose a merchant, check their information and get back to main page', async ({
  page,
}) => {
  await homePage.merchantsHeader.click();
  const merchantsPage = new MerchantsPage(page);
  await merchantsPage.choseMerchant('Quantum KFZ Meisterwerkstatt');
  const specificMerchantPage = new SpecificMerchantPage(page);
  await expect.soft(specificMerchantPage.merchantName).toBeVisible();
  await expect.soft(specificMerchantPage.merchantPicture).toBeVisible();
  await expect.soft(specificMerchantPage.merchantPhoneNumber).toBeVisible();
  await expect.soft(specificMerchantPage.merchantEmailAddress).toBeVisible();
  await expect.soft(specificMerchantPage.merchantInstagramPage).toBeVisible();
  await expect.soft(specificMerchantPage.openingHours).toBeVisible();
  await expect
    .soft(specificMerchantPage.categorieBelongToMerchant)
    .toBeVisible();
  await specificMerchantPage.logoHeader.click();
  const startPage = new StartPage(page);
  await expect.soft(startPage).toBeTruthy();
});

test('base elements on merchants page are visible', async ({ page }) => {
  await homePage.merchantsHeader.click();
  const merchantsPage = new MerchantsPage(page);
  await expect.soft(merchantsPage.filterMerchants).toBeVisible();
  await expect.soft(merchantsPage.searchField).toBeVisible();
  await expect.soft(merchantsPage.logoHeader).toBeVisible();
  await expect
    .soft(merchantsPage.logoHeader)
    .toHaveText('gelsenkirchen-libersave.de');
  await expect.soft(merchantsPage.categoriesHeader).toBeVisible();
  await expect.soft(merchantsPage.categoriesHeader).toHaveText('Kategorien');
  await expect.soft(merchantsPage.merchantsHeader).toBeVisible();
  await expect.soft(merchantsPage.merchantsHeader).toHaveText('Händler');
  await expect.soft(merchantsPage.logoFooter).toBeVisible();
  await expect.soft(merchantsPage.footerName).toBeVisible();
  await expect
    .soft(merchantsPage.footerName)
    .toHaveText('Copyright © 2025 Libersave GmbH. All rights reserved.');
  await expect.soft(merchantsPage.impressum).toBeVisible();
  await expect.soft(merchantsPage.impressum).toHaveText('Impressum');
  await expect.soft(merchantsPage.page1buttonM).toBeVisible();
  await expect.soft(merchantsPage.page2buttonM).toBeVisible();
  await expect.soft(merchantsPage.page3buttonM).toBeVisible();
  await expect.soft(merchantsPage.page1203buttonM).toBeVisible();
  await expect.soft(merchantsPage.page1204buttonM).toBeVisible();
  await expect.soft(merchantsPage.page1205buttonM).toBeVisible();
  await expect.soft(merchantsPage.arrowRightButtonM).toBeVisible();
  await expect.soft(merchantsPage.arrowLeftButtonM).toBeVisible();
  await expect.soft(merchantsPage.merchants).toHaveCount(14); //supposed to be 10 per page but is counting everything with "link"
});

test('base elements on categories page are visible', async ({ page }) => {
  await homePage.categoriesHeader.click();
  const categoriesPage = new CategoriesPage(page);
  await expect.soft(categoriesPage.searchField).toBeVisible();
  await expect.soft(categoriesPage.logoHeader).toBeVisible();
  await expect
    .soft(categoriesPage.logoHeader)
    .toHaveText('gelsenkirchen-libersave.de');
  await expect.soft(categoriesPage.categoriesHeader).toBeVisible();
  await expect.soft(categoriesPage.categoriesHeader).toHaveText('Kategorien');
  await expect.soft(categoriesPage.merchantsHeader).toBeVisible();
  await expect.soft(categoriesPage.merchantsHeader).toHaveText('Händler');
  await expect.soft(categoriesPage.logoFooter).toBeVisible();
  await expect.soft(categoriesPage.footerName).toBeVisible();
  await expect
    .soft(categoriesPage.footerName)
    .toHaveText('Copyright © 2025 Libersave GmbH. All rights reserved.');
  await expect.soft(categoriesPage.impressum).toBeVisible();
  await expect.soft(categoriesPage.impressum).toHaveText('Impressum');
  await expect.soft(categoriesPage.page1buttonC).toBeVisible();
  await expect.soft(categoriesPage.page2buttonC).toBeVisible();
  await expect.soft(categoriesPage.page3buttonC).toBeVisible();
  await expect.soft(categoriesPage.page78buttonC).toBeVisible();
  await expect.soft(categoriesPage.page79buttonC).toBeVisible();
  await expect.soft(categoriesPage.page80buttonC).toBeVisible();
  await expect.soft(categoriesPage.arrowRightButtonC).toBeVisible();
  await expect.soft(categoriesPage.arrowLeftButtonC).toBeVisible();
  await expect.soft(categoriesPage.categories).toHaveCount(16); //supposed to be 12 per page, but is counting everything with "link"
});

test('base elements on impressum page incl. text are visible', async ({
  page,
}) => {
  await homePage.impressum.click();
  const impressumPage = new ImpressumPage(page);
  await expect.soft(impressumPage.logoHeader).toBeVisible();
  await expect
    .soft(impressumPage.logoHeader)
    .toHaveText('gelsenkirchen-libersave.de');
  await expect.soft(impressumPage.categoriesHeader).toBeVisible();
  await expect.soft(impressumPage.categoriesHeader).toHaveText('Kategorien');
  await expect.soft(impressumPage.merchantsHeader).toBeVisible();
  await expect.soft(impressumPage.merchantsHeader).toHaveText('Händler');
  await expect.soft(impressumPage.logoFooter).toBeVisible();
  await expect.soft(impressumPage.footerName).toBeVisible();
  await expect
    .soft(impressumPage.footerName)
    .toHaveText('Copyright © 2025 Libersave GmbH. All rights reserved.');
  await expect.soft(impressumPage.impressum).toBeVisible();
  await expect.soft(impressumPage.impressum).toHaveText('Impressum');
  await expect.soft(impressumPage.impressumTitle).toBeVisible();
  await expect.soft(impressumPage.impressumTitle).toHaveText('Impressum');
  await expect.soft(impressumPage.representator).toBeVisible();
  await expect.soft(impressumPage.representator).toHaveText('Vertreten durch');
  await expect.soft(impressumPage.contact).toBeVisible();
  await expect.soft(impressumPage.contact).toHaveText('Kontakt');
  await expect.soft(impressumPage.taxID).toBeVisible();
  await expect.soft(impressumPage.taxID).toHaveText('Umsatzsteuer-ID');
  await expect.soft(impressumPage.consumerDisputeResolution).toBeVisible();
  await expect
    .soft(impressumPage.consumerDisputeResolution)
    .toHaveText('Verbraucherstreitbeilegung/Universalschlichtungsstelle');
});
