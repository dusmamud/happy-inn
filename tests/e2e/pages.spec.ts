import { expect, test } from '@playwright/test';

test('rooms page links through to a room detail page with facts and booking box', async ({ page }) => {
	await page.goto('/rooms');
	await expect(page.getByRole('heading', { name: 'Rooms & Rates', level: 1 })).toBeVisible();
	await page.getByRole('link', { name: 'Queen Suite Deluxe' }).first().click();
	await expect(page).toHaveURL(/\/rooms\/queen-suite-deluxe/);
	await expect(page.getByRole('heading', { name: 'Queen Suite Deluxe', level: 1 })).toBeVisible();
	await expect(page.getByText('420 sq ft')).toBeVisible();
	await expect(page.getByText('Room Amenities')).toBeVisible();
	await expect(page.getByRole('link', { name: 'Book This Room' }).first()).toBeVisible();
});

test('booking form computes the total and confirms with a reference', async ({ page }) => {
	await page.goto('/book?room=garden-room');
	await expect(page.getByRole('heading', { name: 'Your Stay', exact: true })).toBeVisible();
	// 1 night in the Garden Room: $99 + 12% tax = $111 total
	await expect(page.getByText('$111')).toBeVisible();
	await page.getByLabel('Full Name').fill('Test Guest');
	await page.getByLabel('Email').fill('guest@example.com');
	await page.getByRole('button', { name: 'Confirm Booking' }).click();
	await expect(page.getByRole('status')).toContainText('reference is');
	await expect(page.getByRole('status')).toContainText('no payment was taken');
});

test('booking form rejects checkout before check-in', async ({ page }) => {
	await page.goto('/book');
	await page.getByLabel('Check-Out', { exact: true }).fill('2026-03-07');
	await page.getByLabel('Full Name').fill('Test Guest');
	await page.getByLabel('Email').fill('guest@example.com');
	await page.getByRole('button', { name: 'Confirm Booking' }).click();
	await expect(page.getByRole('alert')).toContainText('at least one night');
});

test('faq accordion expands answers', async ({ page }) => {
	await page.goto('/faq');
	await page.getByRole('button', { name: /cancellation policy/ }).click();
	await expect(page.getByText('booked directly with us. Advance Purchase rates')).toBeVisible();
});

test('gallery filter narrows the photos', async ({ page }) => {
	await page.goto('/gallery');
	const all = await page.locator('main figure').count();
	await page.getByRole('button', { name: 'Dining' }).click();
	const dining = await page.locator('main figure').count();
	expect(dining).toBeLessThan(all);
	expect(dining).toBeGreaterThan(0);
});

test('unknown URL shows the designed 404 page', async ({ page }) => {
	await page.goto('/this-page-does-not-exist');
	await expect(page.getByRole('heading', { name: /This Path Leads To The Garden/ })).toBeVisible();
	await expect(page.getByRole('link', { name: 'Back To Home' })).toBeVisible();
});

test('key pages render their H1s', async ({ page }) => {
	for (const [path, heading] of [
		['/specials', 'Specials & Packages'],
		['/about', 'About The Inn'],
		['/area', 'About The Area'],
		['/spa', 'Spa & Wellness'],
		['/dining', 'Dining At The Inn'],
		['/weddings', 'Weddings At The Inn'],
		['/reviews', 'Guest Reviews'],
		['/contact', 'Contact Us'],
		['/blog', 'The Happy Inn Journal']
	] as const) {
		await page.goto(path);
		await expect(page.getByRole('heading', { name: heading, level: 1 })).toBeVisible();
	}
});
