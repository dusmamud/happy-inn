import { describe, expect, it } from 'vitest';
import { about, booking, features, footer, hero, intro, nav, rooms, site, stats } from './site.ts';

describe('site — The Happy Inn (from reference screenshot)', () => {
	it('carries the inn identity and contact details from the screenshot', () => {
		expect(site.name).toBe('The Happy Inn');
		expect(site.contact.address).toBe('4319 Roosevelt Street, San Francisco, CA 94143');
		expect(site.contact.phone).toBe('(012) 345 - 6789');
		expect(site.contact.email).toBe('bookings@the-happy-inn.com');
		expect(site.weather.temperature).toBe('26°');
	});

	it('has unique nav labels and hrefs, Home active', () => {
		const labels = nav.map((item) => item.label);
		const hrefs = nav.map((item) => item.href);
		expect(new Set(labels).size).toBe(labels.length);
		expect(new Set(hrefs).size).toBe(hrefs.length);
		expect(nav[0]).toMatchObject({ label: 'Home', active: true });
		expect(nav).toHaveLength(5);
	});
});

describe('hero and booking', () => {
	it('has three slides, each with alt text', () => {
		expect(hero.slides).toHaveLength(3);
		for (const slide of hero.slides) {
			expect(slide.stem).toMatch(/^\/images\//);
			expect(slide.alt.length).toBeGreaterThan(0);
		}
		expect(hero.offers).toHaveLength(3);
		expect(hero.offers[1].badge).toBe('20% Off');
	});

	it('booking defaults match the screenshot: Mar 08 → Mar 09, 1 guest', () => {
		expect(booking.checkIn).toEqual({ month: 'March', day: 8 });
		expect(booking.checkOut).toEqual({ month: 'March', day: 9 });
		expect(booking.guests).toBe(1);
		expect(booking.buttonLabel).toBe('Check Room Availability');
	});

	it('intro names Staunton, Virginia and lists five extras', () => {
		expect(intro.text).toContain('Staunton, Virginia');
		expect(intro.text).toContain('Smithsonian Magazine');
		expect(intro.extras).toHaveLength(5);
	});
});

describe('about and stats', () => {
	it('has three tabs, the first being About Us — Perfect Escape', () => {
		expect(about.tabs.map((t) => t.label)).toEqual(['About Us', 'Our History', 'Locate Us']);
		expect(about.tabs[0].heading).toBe('It Is The Perfect Escape');
		expect(about.tabs[0].paragraphs[0]).toContain('9,000-square-foot');
	});

	it('stats match the screenshot band', () => {
		expect(stats).toEqual([
			{ value: '28,989', label: 'Guests' },
			{ value: '17', label: 'Rooms Available' },
			{ value: '98%', label: 'Satisfied Clients' },
			{ value: '97%', label: 'Recommend This' }
		]);
	});
});

describe('rooms', () => {
	it('lists the four rooms from the screenshot with their nightly prices', () => {
		expect(rooms.map((r) => [r.name, r.price])).toEqual([
			['Queen Suite Deluxe', 189],
			['Treetop Suite', 125],
			['Royal Poinciana', 149],
			['Garden Room', 99]
		]);
		for (const room of rooms) {
			expect(room.unit).toBe('/night');
			expect(room.description.length).toBeGreaterThan(0);
			expect(room.image.alt.length).toBeGreaterThan(0);
		}
	});
});

describe('features and footer', () => {
	it('has the six feature cards from the screenshot, in order', () => {
		expect(features.map((f) => f.title)).toEqual([
			'View Our Rooms',
			'Delicious Breakfast',
			'Treatments',
			'Play Outdoors',
			'Plan Your Wedding',
			'Accommodations'
		]);
	});

	it('footer carries gallery, link columns and the 2017 copyright', () => {
		expect(footer.gallery.images).toHaveLength(6);
		expect(footer.columns.map((c) => c.title)).toEqual(['About', 'Support']);
		expect(footer.copyright).toBe('© 2017 The Happy Inn - All Rights Reserved.');
	});
});
