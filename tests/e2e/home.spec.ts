import { expect, test } from '@playwright/test';

test('home renders hero, H1, booking, about, rooms and features', async ({ page }) => {
	await page.goto('/');

	await expect(page.getByRole('heading', { level: 1 })).toContainText('The Happy Inn');
	await expect(page.getByRole('link', { name: 'Book A Room' })).toBeVisible();
	await expect(page.getByRole('button', { name: 'Check Room Availability' })).toBeVisible();
	await expect(page.getByRole('heading', { name: 'The Happy Inn', level: 2 })).toBeVisible();
	await expect(page.getByRole('heading', { name: 'Room Listings' })).toBeVisible();
	await expect(page.getByRole('heading', { name: 'Queen Suite Deluxe' })).toBeVisible();
	await expect(page.getByText('$189/night')).toBeVisible();
	await expect(page.getByRole('heading', { name: 'Plan Your Wedding' })).toBeVisible();
	await expect(page.getByRole('heading', { name: 'Loved By Our Guests' })).toBeVisible();
});

test('hero image is eager with high fetch priority', async ({ page }) => {
	await page.goto('/');
	const img = page.locator('main img').first();
	await expect(img).toHaveAttribute('loading', 'eager');
	await expect(img).toHaveAttribute('fetchpriority', 'high');
	await expect(img).toHaveAttribute('alt', /turquoise bedding/);
});

test('mock availability check validates dates and shows a total', async ({ page }) => {
	await page.goto('/#booking');
	await page.getByRole('button', { name: 'More guests' }).click();
	await page.getByRole('button', { name: 'Check Room Availability' }).click();
	await expect(page.getByRole('status')).toContainText('Good news');
	await expect(page.getByRole('status')).toContainText('2 guests');
	await expect(page.getByRole('status')).toContainText('from $99 total');
});

test('about tabs switch content', async ({ page }) => {
	await page.goto('/#about');
	await page.getByRole('tab', { name: 'Our History' }).click();
	await expect(page.getByRole('heading', { name: 'A House With A Story' })).toBeVisible();
});

test('no horizontal scroll at 360px (mobile-first rule)', async ({ page }) => {
	await page.setViewportSize({ width: 360, height: 800 });
	await page.goto('/');
	const overflow = await page.evaluate(
		() => document.documentElement.scrollWidth - document.documentElement.clientWidth
	);
	expect(overflow).toBe(0);
});
