import { expect, test } from '@playwright/test';

test.describe('round-2 additions', () => {
	test('gift cards page renders cards and the mock checkout confirms', async ({ page }) => {
		await page.goto('/gift-cards');
		await expect(page.getByRole('heading', { name: 'Give A Stay At The Inn' })).toBeVisible();
		await expect(page.getByText('The Escape')).toBeVisible();
		await page.getByLabel('Recipient’s Name').fill('Maya Kapoor');
		await page.getByLabel('Delivery Email').fill('maya@example.com');
		await page.getByRole('button', { name: /Buy \$250 Gift Card/ }).click();
		await expect(page.getByRole('heading', { name: 'Gift Card On Its Way' })).toBeVisible();
	});

	test('rooms page sorts by price and filters by guests', async ({ page }) => {
		await page.goto('/rooms');
		const cards = page.locator('section[aria-label="All rooms"] article');
		await expect(cards).toHaveCount(4);
		await page.getByLabel('Sort Rooms').selectOption('price-asc');
		await expect(cards.first().getByRole('heading')).toHaveText('Garden Room');
		await page.getByLabel('Guests').selectOption('4');
		await expect(cards).toHaveCount(1);
		await expect(page.getByText('1 of 4 rooms')).toBeVisible();
	});

	test('gallery lightbox opens, navigates and closes', async ({ page }) => {
		await page.goto('/gallery');
		await page.getByRole('button', { name: /View larger: Queen Suite Deluxe/ }).click();
		const dialog = page.getByRole('dialog', { name: 'Photo viewer' });
		await expect(dialog).toBeVisible();
		await expect(dialog.getByText('2 / 10')).toBeVisible();
		await dialog.getByRole('button', { name: 'Next photo' }).click();
		await expect(dialog.getByText('3 / 10')).toBeVisible();
		await page.keyboard.press('Escape');
		await expect(dialog).toBeHidden();
	});

	test('booking promo code applies a discount', async ({ page }) => {
		await page.goto('/book');
		const summary = page.getByLabel('Price summary');
		await summary.getByLabel('Promo Code').fill('HAPPY10');
		await summary.getByRole('button', { name: 'Apply' }).click();
		await expect(summary.getByText('Promo HAPPY10 (−10%)')).toBeVisible();
		await expect(summary.getByText('10% off your stay applied.')).toBeVisible();
	});

	test('specials page shows the loyalty circle', async ({ page }) => {
		await page.goto('/specials');
		await expect(page.getByRole('heading', { name: /Happy Returns/ })).toBeVisible();
		await expect(page.getByText('Inner Circle')).toBeVisible();
	});

	test('PWA manifest is served and linked', async ({ page }) => {
		const res = await page.request.get('/manifest.webmanifest');
		expect(res.ok()).toBeTruthy();
		const manifest = await res.json();
		expect(manifest.short_name).toBe('Happy Inn');
		await page.goto('/');
		await expect(page.locator('link[rel="manifest"]')).toHaveCount(1);
	});
});
