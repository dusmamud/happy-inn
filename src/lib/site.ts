// Single mock-data file for The Happy Inn — recreated from the client's
// reference screenshot, then expanded with the pages/sections a world-class
// boutique hotel website needs (audit 2026-11-19). ALL data is mock data —
// real data replaces this file only after the client approves the design.
// Pages never hard-code copy.

export const site = {
	name: 'The Happy Inn',
	tagline: 'It Is The Perfect Escape',
	description:
		'The Happy Inn is a twenty-three room hotel in San Francisco’s Inner Richmond — steps from Golden Gate Park, the Presidio and the Clement Street shops.',
	url: 'https://happy-inn.pages.dev',
	locale: 'en-US',
	currency: 'USD',
	contact: {
		address: '4319 Roosevelt Street, San Francisco, CA 94143',
		phone: '(012) 345 - 6789',
		phoneHref: 'tel:+10123456789',
		email: 'bookings@the-happy-inn.com'
	},
	weather: { label: 'Weather', temperature: '26°' },
	rating: { score: '4.9', count: 1284, label: 'Excellent' },
	checkInTime: '3:00 PM',
	checkOutTime: '11:00 AM'
};

export const nav = [
	{ label: 'Home', href: '/' },
	{ label: 'Rooms & Rates', href: '/rooms' },
	{ label: 'Specials & Packages', href: '/specials' },
	{ label: 'About The Inn', href: '/about' },
	{ label: 'About The Area', href: '/area' }
];

export const perks = [
	{ title: 'Best Rate Guarantee', text: 'Book direct and we match any lower rate you find.' },
	{ title: 'Complimentary Breakfast', text: 'Served poolside every morning, included in every rate.' },
	{ title: 'Flexible Cancellation', text: 'Free cancellation up to 48 hours before arrival.' },
	{ title: 'Early Check-In', text: 'From 1:00 PM whenever your room is ready early.' }
];

export const hero = {
	slides: [
		{
			stem: '/images/hero',
			alt: 'Bright Happy Inn bedroom with turquoise bedding, wooden headboard and mint wall art'
		},
		{
			stem: '/images/room-queen',
			alt: 'Queen Suite Deluxe with golden bedding, dark wood furniture and warm lamps'
		},
		{
			stem: '/images/room-treetop',
			alt: 'Treetop Suite with floor-to-ceiling windows overlooking green treetops'
		}
	],
	offers: [
		{ label: 'Book A Room', href: '/book', style: 'light', badge: '' },
		{ label: 'Renew Your Body', href: '/spa', style: 'gold', badge: '20% Off' },
		{ label: 'Special Offers Of The Month', href: '/specials', style: 'gold', badge: '' }
	]
};

export const booking = {
	checkIn: { month: 'March', day: 8 },
	checkOut: { month: 'March', day: 9 },
	guests: 1,
	assistanceLabel: '24/7 Assistance',
	buttonLabel: 'Check Room Availability'
};

export const intro = {
	text: 'The Happy Inn is a twenty-three room hotel in the heart of San Francisco’s Inner Richmond, a short stroll from Golden Gate Park and the bay breeze off the Pacific.',
	extras: [
		'Delightful extras enhance your relaxation and renewal',
		'A wonderful variety of body services encase you in luxury',
		'Professional waxing provides the finishing touch',
		'Complimentary breakfast served poolside',
		'Pool and beach towels, sunscreen'
	]
};

export const about = {
	eyebrow: 'More About',
	title: 'The Happy Inn',
	tabs: [
		{
			id: 'about-us',
			label: 'About Us',
			heading: 'It Is The Perfect Escape',
			paragraphs: [
				'The inn sits above the Inner Richmond, canopied by old cypress trees and caressed by bay breezes off the Pacific. It is a setting made for total relaxation, and the luxurious 9,000-square-foot european style spa is its crown jewel.',
				'Today, the house has been revived to show off its full glory. Dean and Paul were instrumental in treating the house to the period ornamentation they feel it deserved. The Happy Inn still retains many of its original features.'
			]
		},
		{
			id: 'our-history',
			label: 'Our History',
			heading: 'A House With A Story',
			paragraphs: [
				'Our historic 1880’s cigar maker conch cottage and the 1904 Queen Anne Victorian mansion have welcomed travellers for well over a century, each room keeping its own distinct personality.',
				'Restored with care, the inn still retains many of its original features — from the angled bay windows to the lighthouse mast that bears witness to ships sailing past the property.'
			]
		},
		{
			id: 'locate-us',
			label: 'Locate Us',
			heading: 'Find Your Way To Us',
			paragraphs: [
				'You will find us at 4319 Roosevelt Street, San Francisco, CA 94143 — a short stroll from Golden Gate Park, the Clement Street shops and the bay breeze off the Pacific.',
				'Call us any time on (012) 345 - 6789 or write to bookings@the-happy-inn.com and we will happily plan your arrival.'
			]
		}
	],
	cta: { label: 'About The Inn', href: '/about' },
	images: {
		room: {
			stem: '/images/room-queen',
			alt: 'Classic Happy Inn room with golden bedding and dark wood furniture'
		},
		pool: {
			stem: '/images/about-pool',
			alt: 'Garden pathway lined with palm trees leading to the inn swimming pool'
		}
	},
	hosts: [
		{ name: 'Dean & Paul', role: 'Your Hosts', text: 'Dean and Paul revived the house to show off its full glory, treating it to the period ornamentation they feel it deserved — and they still greet most guests personally at the door.' },
		{ name: 'The Happy Inn Team', role: 'Spa, Kitchen & Garden', text: 'A small team of therapists, cooks and gardeners keeps the spa calm, the breakfast fresh and the gardens lush, seven days a week.' }
	]
};

export const stats = [
	{ value: '28,989', label: 'Guests' },
	{ value: '17', label: 'Rooms Available' },
	{ value: '98%', label: 'Satisfied Clients' },
	{ value: '97%', label: 'Recommend This' }
];

export const roomsSection = {
	eyebrow: 'Check Our',
	title: 'Room Listings',
	intro: [
		'Sir Robert Bristow, a member of the Royal Society of Arts, left his indelible mark in the construction and architecture of british style heritage building.',
		'The centuries-old trees and the lighthouse mast bear witness to beautiful ships that sail past the property and add to the staying experience of our esteemed guests who make this property.'
	],
	cta: { label: 'All Listings', href: '/rooms' }
};

export type Room = {
	slug: string;
	name: string;
	description: string;
	longDescription: string[];
	price: number;
	unit: string;
	size: string;
	bed: string;
	occupancy: number;
	view: string;
	floor: string;
	amenities: string[];
	image: { stem: string; alt: string };
	gallery: { stem: string; alt: string }[];
};

export const rooms: Room[] = [
	{
		slug: 'queen-suite-deluxe',
		name: 'Queen Suite Deluxe',
		description:
			'This room offers all the amenities of a great honeymoon suite or from extended romantic getaway. Watch the world of the Richmond District go by.',
		longDescription: [
			'Our most loved suite pairs a dark wood queen bed with golden linens, a reading chair by the window and warm lamplight in the evening. It is the room couples ask for by name.',
			'The bathroom carries a deep soaking tub, and the window seat looks over the garden — an easy place to watch the world of the Richmond District go by with your morning coffee.'
		],
		price: 189,
		unit: '/night',
		size: '420 sq ft',
		bed: '1 Queen Bed',
		occupancy: 2,
		view: 'Garden & Bay View',
		floor: 'Second Floor',
		amenities: ['Free Wi-Fi', 'Soaking Tub', 'Window Seat', 'Air Conditioning', 'Smart TV', 'Coffee Maker', 'Daily Housekeeping', 'Pool Towels'],
		image: {
			stem: '/images/room-queen',
			alt: 'Queen Suite Deluxe with golden bedding and dark wood headboard'
		},
		gallery: [
			{ stem: '/images/room-queen', alt: 'Queen Suite Deluxe main view' },
			{ stem: '/images/hero', alt: 'Bright bedding detail in the Queen Suite Deluxe' },
			{ stem: '/images/about-pool', alt: 'Garden and pool view from the Queen Suite Deluxe' }
		]
	},
	{
		slug: 'treetop-suite',
		name: 'Treetop Suite',
		description:
			'Nestled away on the third floor and aptly named for its view out across the neighborhood treetops. The room features are great.',
		longDescription: [
			'Perched on the third floor, the Treetop Suite floats above the neighbourhood canopy. Floor-to-ceiling glass brings the green inside, and sunrise arrives right at the foot of the bed.',
			'A small balcony, a writing desk and the quietest corner of the house make it a favourite for readers, writers and slow mornings.'
		],
		price: 125,
		unit: '/night',
		size: '350 sq ft',
		bed: '1 Queen Bed',
		occupancy: 2,
		view: 'Treetop & Sea View',
		floor: 'Third Floor',
		amenities: ['Free Wi-Fi', 'Private Balcony', 'Writing Desk', 'Air Conditioning', 'Smart TV', 'Rain Shower', 'Daily Housekeeping', 'Pool Towels'],
		image: {
			stem: '/images/room-treetop',
			alt: 'Treetop Suite with large windows above the neighbourhood treetops'
		},
		gallery: [
			{ stem: '/images/room-treetop', alt: 'Treetop Suite main view' },
			{ stem: '/images/outdoor', alt: 'View across the neighbourhood from the Treetop Suite' },
			{ stem: '/images/hero', alt: 'Bedding detail in the Treetop Suite' }
		]
	},
	{
		slug: 'royal-poinciana',
		name: 'Royal Poinciana',
		description:
			'Perfect writer’s retreat. Named after one of the stately trees in our great garden, you are inspired to unwind on the outside veranda.',
		longDescription: [
			'Named after the stately Royal Poinciana in our garden, this room opens straight onto its own veranda — coffee outside, manuscript optional.',
			'Inside, soft green linens, a proper desk and the shade of the great tree keep the room cool and calm through the warmest afternoons.'
		],
		price: 149,
		unit: '/night',
		size: '380 sq ft',
		bed: '1 Queen Bed',
		occupancy: 2,
		view: 'Garden Veranda',
		floor: 'First Floor',
		amenities: ['Free Wi-Fi', 'Private Veranda', 'Writing Desk', 'Air Conditioning', 'Smart TV', 'Rain Shower', 'Daily Housekeeping', 'Garden Access'],
		image: {
			stem: '/images/room-royal',
			alt: 'Royal Poinciana room opening onto a garden veranda with tropical plants'
		},
		gallery: [
			{ stem: '/images/room-royal', alt: 'Royal Poinciana main view' },
			{ stem: '/images/about-pool', alt: 'Garden path outside the Royal Poinciana' },
			{ stem: '/images/breakfast', alt: 'Breakfast served on the Royal Poinciana veranda' }
		]
	},
	{
		slug: 'garden-room',
		name: 'Garden Room',
		description:
			'Ground floor room has cathedral ceilings, a cool terra cotta floor, and a verdigris metal queen-size bed. French doors open.',
		longDescription: [
			'The Garden Room sits at ground level beneath cathedral ceilings, with a cool terra cotta floor underfoot and a verdigris metal queen-size bed at its heart.',
			'French doors open directly to the garden, so the day starts with birdsong and ends with the scent of jasmine drifting in.'
		],
		price: 99,
		unit: '/night',
		size: '300 sq ft',
		bed: '1 Queen Bed',
		occupancy: 2,
		view: 'Private Garden',
		floor: 'Ground Floor',
		amenities: ['Free Wi-Fi', 'Step-Free Access', 'French Doors', 'Air Conditioning', 'Smart TV', 'Rain Shower', 'Daily Housekeeping', 'Garden Access'],
		image: {
			stem: '/images/room-garden',
			alt: 'Garden Room with teal metal queen bed and French doors to the garden'
		},
		gallery: [
			{ stem: '/images/room-garden', alt: 'Garden Room main view' },
			{ stem: '/images/about-pool', alt: 'Pool and garden beside the Garden Room' },
			{ stem: '/images/room-royal', alt: 'Veranda style of the Garden Room' }
		]
	}
];

export const roomFromPrice = Math.min(...rooms.map((r) => r.price));

export const features = [
	{
		title: 'View Our Rooms',
		description:
			'Each uniquely decorated room in our stately mansion has its own distinct personality.',
		href: '/rooms',
		image: { stem: '/images/room-queen', alt: 'Uniquely decorated room in the stately mansion' }
	},
	{
		title: 'Delicious Breakfast',
		description:
			'Breakfast is served poolside underneath a canopy of tropical foliage. You can linger over the morning.',
		href: '/dining',
		image: {
			stem: '/images/breakfast',
			alt: 'Breakfast spread with fresh fruit, pastries and salmon served poolside'
		}
	},
	{
		title: 'Treatments',
		description:
			'Entrusts the skincare of its clients to the prestigious luxury cosmetics brand Natura Bissé.',
		href: '/spa',
		image: { stem: '/images/spa', alt: 'Guest enjoying a luxury facial treatment at the inn spa' }
	},
	{
		title: 'Play Outdoors',
		description: 'There is so much to do if you ever feel like leaving your room and go nearby the inn.',
		href: '/area',
		image: { stem: '/images/outdoor', alt: 'Guests sightseeing outdoors near the inn on a sunny day' }
	},
	{
		title: 'Plan Your Wedding',
		description:
			'Our inn also can accommodate for wedding as we can provide you a nice space for your special day.',
		href: '/weddings',
		image: { stem: '/images/wedding', alt: 'Couple exchanging rings at a garden wedding at the inn' }
	},
	{
		title: 'Accommodations',
		description: 'Our 1904 Queen Anne Victorian mansion with its distinctive style of angled bay windows.',
		href: '/about',
		image: { stem: '/images/hero', alt: 'Turquoise bedroom inside the Queen Anne Victorian mansion' }
	}
];

export const offers = [
	{
		slug: 'renew-your-body',
		name: 'Renew Your Body — Spa Escape',
		badge: '20% Off',
		price: 'From $151/night',
		description:
			'Two nights in any room, a 60-minute Natura Bissé facial for two, and breakfast served poolside each morning.',
		includes: ['2 nights, any room', '60-min facial for two', 'Poolside breakfast daily', 'Late check-out at 1:00 PM'],
		image: { stem: '/images/spa', alt: 'Spa treatment at The Happy Inn' }
	},
	{
		slug: 'stay-3-pay-2',
		name: 'Stay 3, Pay 2',
		badge: '1 Night Free',
		price: 'From $99/night',
		description:
			'The third night is on us. Slow down, explore San Francisco properly, and let the garden do the rest.',
		includes: ['3 nights for the price of 2', 'Complimentary breakfast', 'Pool & beach towels', 'Free parking'],
		image: { stem: '/images/about-pool', alt: 'Pool and garden at The Happy Inn' }
	},
	{
		slug: 'romantic-getaway',
		name: 'Romantic Getaway',
		badge: 'Couples',
		price: 'From $189/night',
		description:
			'The Queen Suite Deluxe with a bottle of sparkling wine on arrival, a private veranda dinner and a couples massage.',
		includes: ['Queen Suite Deluxe', 'Sparkling wine on arrival', 'Private veranda dinner', 'Couples massage, 45 min'],
		image: { stem: '/images/room-queen', alt: 'Queen Suite Deluxe set for a romantic stay' }
	},
	{
		slug: 'advance-purchase',
		name: 'Advance Purchase',
		badge: 'Save 15%',
		price: 'From $84/night',
		description:
			'Plan ahead and save. Book 30+ days before arrival and take 15% off our best flexible rate, breakfast included.',
		includes: ['15% off best flexible rate', 'Book 30+ days ahead', 'Complimentary breakfast', 'Free date change once'],
		image: { stem: '/images/room-garden', alt: 'Garden Room in soft morning light' }
	}
];

export const giftCards = [
	{ amount: 100, name: 'The Weekender', text: 'A gentle nudge towards a night away — covers a Garden Room night in the quiet season, breakfast included.', perk: 'Delivered by email in minutes' },
	{ amount: 250, name: 'The Escape', text: 'Two nights in a suite with breakfast each morning and a spa treatment for one.', perk: 'Most popular' },
	{ amount: 500, name: 'The Whole Inn Feeling', text: 'A suite weekend with spa rituals for two, a veranda dinner and a very late check-out.', perk: 'Valid 24 months, any dates' }
];

export const promoCodes: Record<string, { percent: number; label: string }> = {
	HAPPY10: { percent: 10, label: '10% off your stay' },
	GOLDEN15: { percent: 15, label: '15% off suites' }
};

export const loyalty = {
	title: 'Happy Returns — Our Loyalty Circle',
	text: 'Direct bookers join free. Every stay earns a stamp; five stamps earn a free night, and members always get the spa discount, late check-out and first refusal on garden-view rooms.',
	tiers: [
		{ name: 'Guest', stays: '1–2 stays', perks: ['10% spa discount', 'Late check-out when free'] },
		{ name: 'Regular', stays: '3–4 stays', perks: ['Free room upgrade when available', 'Welcome drink on arrival'] },
		{ name: 'Inner Circle', stays: '5+ stays', perks: ['Every 5th night free', 'Veranda dinner for two, once a year'] }
	]
};

export const testimonials = [
	{
		quote:
			'The perfect escape is exactly right. Breakfast by the pool, the spa afternoon, and a room that smells of jasmine — we rebooked before we even left.',
		author: 'Sarah Mitchell',
		location: 'Charleston, SC',
		date: 'October 2026',
		source: 'Google Reviews',
		rating: 5,
		room: 'Queen Suite Deluxe'
	},
	{
		quote:
			'Dean and Paul have thought of everything. The Treetop Suite at sunrise is worth the trip on its own, and the staff remembered our names all weekend.',
		author: 'James O’Connor',
		location: 'Boston, MA',
		date: 'September 2026',
		source: 'Tripadvisor',
		rating: 5,
		room: 'Treetop Suite'
	},
	{
		quote:
			'We held our wedding in the garden and the team handled every detail. Our guests are still talking about the veranda dinner a year later.',
		author: 'Priya Sharma',
		location: 'Richmond, VA',
		date: 'August 2026',
		source: 'Google Reviews',
		rating: 5,
		room: 'Royal Poinciana'
	},
	{
		quote:
			'Quiet, spotless and genuinely warm. The Garden Room opening straight onto the lawn made travelling with our dog effortless.',
		author: 'Tom & Elif Weber',
		location: 'Chicago, IL',
		date: 'July 2026',
		source: 'Booking.com',
		rating: 5,
		room: 'Garden Room'
	},
	{
		quote:
			'Best breakfast of our whole road trip, served under the palms. Book direct — the spa discount alone beat every other site.',
		author: 'Amelia Ross',
		location: 'Austin, TX',
		date: 'June 2026',
		source: 'Tripadvisor',
		rating: 5,
		room: 'Queen Suite Deluxe'
	},
	{
		quote:
			'A small inn that feels like a secret. The history of the house, the old trees, the fog rolling over the rooftops at dusk — pure San Francisco magic.',
		author: 'Daniel Kim',
		location: 'Seattle, WA',
		date: 'May 2026',
		source: 'Google Reviews',
		rating: 4,
		room: 'Treetop Suite'
	}
];

export const faqs = [
	{
		q: 'What time is check-in and check-out?',
		a: 'Check-in is from 3:00 PM and check-out is until 11:00 AM. Book direct and we will check you in from 1:00 PM whenever your room is ready early — and a late check-out can usually be arranged at the front desk.'
	},
	{
		q: 'What is your cancellation policy?',
		a: 'Free cancellation up to 48 hours before arrival on all flexible rates booked directly with us. Advance Purchase rates can be changed to a new date once, free of charge.'
	},
	{
		q: 'Is breakfast included?',
		a: 'Yes — a full breakfast is complimentary with every direct booking and is served poolside from 7:30 AM to 10:30 AM, underneath the tropical canopy.'
	},
	{
		q: 'Do you offer parking?',
		a: 'Complimentary on-site parking is included for one car per room, with two EV charging points by the garden gate.'
	},
	{
		q: 'Are pets allowed?',
		a: 'Well-behaved dogs are welcome in the Garden Room and Royal Poinciana for a $25 per-stay cleaning fee. Please tell us in advance so the water bowl and treats are ready.'
	},
	{
		q: 'Is the inn accessible?',
		a: 'The ground-floor Garden Room offers step-free access from the car park, a walk-in rain shower and wide doorways. The spa and breakfast terrace are also step-free.'
	},
	{
		q: 'How do I book a spa treatment?',
		a: 'Treatments can be added while booking your room, or reserved any time by phone on (012) 345 - 6789. We recommend booking facials and massages at least a day ahead.'
	},
	{
		q: 'Can you host our wedding or event?',
		a: 'Yes — the garden hosts weddings and private events for up to 80 guests, with the mansion veranda for dinner. See our Weddings page for packages, or write to bookings@the-happy-inn.com.'
	}
];

export const attractions = [
	{ name: 'Golden Gate Park', distance: '10 min walk', text: 'A thousand acres of gardens, meadows, windmills and museums begin almost at our door — the city’s great green backyard.', image: { stem: '/images/about-pool', alt: 'Lush green paths in Golden Gate Park' } },
	{ name: 'California Academy of Sciences', distance: '6 min drive', text: 'A rainforest dome, planetarium, aquarium and a living roof, all in one building in the heart of the park.', image: { stem: '/images/hero', alt: 'Bright museum interiors at the California Academy of Sciences' } },
	{ name: 'The Presidio & Golden Gate Bridge', distance: '10 min drive', text: 'Forest trails, bay beaches and the walk across the Golden Gate Bridge itself — it all starts at the Presidio gate.', image: { stem: '/images/room-treetop', alt: 'View towards the Golden Gate from the Presidio' } },
	{ name: 'Baker Beach', distance: '8 min drive', text: 'A mile of sand beneath the bridge, beloved for picnics, sunsets and the city’s most famous view.', image: { stem: '/images/outdoor', alt: 'Guests at Baker Beach below the Golden Gate Bridge' } },
	{ name: 'de Young Museum', distance: '7 min drive', text: 'American art, textiles and rotating exhibitions in a copper-clad landmark — the observation tower is free.', image: { stem: '/images/room-queen', alt: 'Art and interiors at the de Young Museum' } },
	{ name: 'Clement Street', distance: '5 min walk', text: 'Our own neighbourhood high street: dim sum, bookshops, bakeries and some of the city’s best-loved restaurants.', image: { stem: '/images/breakfast', alt: 'Breakfast and bakeries along Clement Street' } }
];

export const gallery = [
	{ stem: '/images/hero', alt: 'Turquoise bedroom in the main mansion', category: 'Rooms' },
	{ stem: '/images/room-queen', alt: 'Queen Suite Deluxe with golden bedding', category: 'Rooms' },
	{ stem: '/images/room-treetop', alt: 'Treetop Suite windows above the canopy', category: 'Rooms' },
	{ stem: '/images/room-royal', alt: 'Royal Poinciana opening to the veranda', category: 'Rooms' },
	{ stem: '/images/room-garden', alt: 'Garden Room with French doors', category: 'Rooms' },
	{ stem: '/images/about-pool', alt: 'Boardwalk through the palms to the pool', category: 'Spa & Pool' },
	{ stem: '/images/spa', alt: 'Facial treatment in the spa', category: 'Spa & Pool' },
	{ stem: '/images/breakfast', alt: 'Breakfast spread served poolside', category: 'Dining' },
	{ stem: '/images/wedding', alt: 'Ring exchange at a garden wedding', category: 'Weddings' },
	{ stem: '/images/outdoor', alt: 'Guests sightseeing near the inn', category: 'The Area' }
];

export const spaTreatments = [
	{ name: 'Natura Bissé Signature Facial', duration: '60 min', price: 95, text: 'The prestigious luxury skincare ritual our spa is known for — cleanse, sculpt, glow.' },
	{ name: 'Deep Tissue Massage', duration: '60 min', price: 85, text: 'Firm, slow work for travellers’ shoulders, backs and legs.' },
	{ name: 'Couples Massage', duration: '45 min', price: 140, text: 'Side-by-side relaxation in the garden treatment room.' },
	{ name: 'Professional Waxing', duration: '30 min', price: 40, text: 'The finishing touch — gentle, precise, and over before you know it.' },
	{ name: 'Body Polish & Renewal Wrap', duration: '75 min', price: 110, text: 'Exfoliation, warm wrap and a scalp massage. The full Renew Your Body ritual.' },
	{ name: 'Poolside Mini Treatments', duration: '20 min', price: 35, text: 'Hand, foot or shoulder refreshers served right at your lounger.' }
];

export const dining = {
	hours: 'Breakfast served daily, 7:30 AM – 10:30 AM, poolside',
	highlights: [
		{ name: 'The Poolside Breakfast', text: 'Fresh fruit, warm pastries, smoked salmon, farm eggs any style, and coffee that keeps coming — underneath the tropical canopy.' },
		{ name: 'Veranda Dinners', text: 'On Fridays and Saturdays the veranda seats 24 for a three-course set menu built on Bay Area farm produce. Reserve ahead.' },
		{ name: 'Afternoon Tea', text: 'Scones, finger sandwiches and leaf tea in the garden at 3:00 PM, Wednesday to Sunday. Included for suite guests on Sundays.' }
	],
	menu: [
		{ item: 'Valley Farm Eggs, Any Style', price: 0 },
		{ item: 'Smoked Salmon & Cream Cheese Board', price: 0 },
		{ item: 'Buttermilk Pancakes, Maple & Berries', price: 0 },
		{ item: 'Tropical Fruit & Yogurt Bowl', price: 0 },
		{ item: 'Fresh Pastries & Sourdough Basket', price: 0 },
		{ item: 'Veranda Dinner — Three Courses (Fri–Sat)', price: 65 }
	]
};

export const weddingPackages = [
	{ name: 'Garden Ceremony', price: 'From $2,400', guests: 'Up to 40 guests', includes: ['Garden ceremony under the poinciana', 'Chairs, arch & aisle styling', 'Bridal suite for the day', 'Champagne toast for the couple'] },
	{ name: 'Veranda Celebration', price: 'From $4,800', guests: 'Up to 80 guests', includes: ['Ceremony + veranda dinner', 'Three-course menu for all guests', 'Two suites for the wedding night', 'Dedicated events coordinator'] },
	{ name: 'Whole Inn Weekend', price: 'From $9,500', guests: 'All 23 rooms, 2 nights', includes: ['The entire inn, exclusively yours', 'Welcome dinner + wedding day + brunch', 'Spa morning for the wedding party', 'Late check-out for everyone'] }
];

export const blogPosts = [
	{
		slug: 'weekend-guide-san-francisco',
		title: 'A Perfect Weekend in San Francisco: Our 48-Hour Guide',
		date: 'November 8, 2026',
		excerpt: 'Golden Gate Park mornings, a rainforest in the middle of the city, and dinner on the veranda — here is how our guests spend two perfect days.',
		image: { stem: '/images/outdoor', alt: 'Guests exploring San Francisco for the weekend' },
		body: [
			'Start with breakfast by our pool, then walk ten minutes into Golden Gate Park. The gardens, the Japanese Tea Garden and the Conservatory of Flowers fill an easy morning, and the Clement Street farmers market on Sunday is not to be missed.',
			'In the afternoon, step under the living roof of the California Academy of Sciences — rainforest, reef and planetarium in one building. Evenings belong to the veranda: dinner, a glass of Napa wine, and the fog rolling in over the rooftops.',
			'On day two, walk the Presidio trails down to Baker Beach and across the Golden Gate, then finish with a spa treatment back at the inn. That is the weekend our guests write home about.'
		]
	},
	{
		slug: 'inside-the-spa-renew-your-body',
		title: 'Inside the Spa: The Renew Your Body Ritual',
		date: 'October 21, 2026',
		excerpt: 'Our 9,000-square-foot european style spa is the crown jewel of the inn. Here is what happens inside our signature treatment, step by step.',
		image: { stem: '/images/spa', alt: 'The Renew Your Body ritual in the spa' },
		body: [
			'The ritual begins with a warm towel compress and a scalp massage while the treatment room fills with the scent of orange blossom.',
			'Then comes the Natura Bissé facial our guests cross states for — cleanse, gentle enzyme polish, sculpting massage and a cooling mask — followed by a full-body renewal wrap.',
			'You leave via the garden, slowly, with a cup of herbal tea. Most guests book their next one before checkout.'
		]
	},
	{
		slug: 'garden-weddings-at-the-inn',
		title: 'Garden Weddings at The Happy Inn',
		date: 'September 30, 2026',
		excerpt: 'Under the Royal Poinciana, with dinner on the 1904 veranda — a look at how weddings unfold at the inn, from first viewing to last dance.',
		image: { stem: '/images/wedding', alt: 'A garden wedding ceremony at the inn' },
		body: [
			'The garden seats 80 beneath the old trees, and the ceremony arch is dressed with whatever is blooming that week — no two weddings here ever look the same.',
			'Dinner moves to the Queen Anne veranda as the light turns gold, and the party ends with coffee and cake under string lights by the pool.',
			'Couples who book the Whole Inn Weekend get all 23 rooms for two nights — the celebration never has to end early.'
		]
	}
];

export const footer = {
	about:
		'You may also enjoy the laid-back style of one of our conch cottage rooms. Our historic 1880’s cigar maker conch cottage sets the backdrop for the bright tropical colors.',
	columns: [
		{
			title: 'About',
			links: [
				{ label: 'About The Inn', href: '/about' },
				{ label: 'Room Overview', href: '/rooms' },
				{ label: 'Our Amenities', href: '/spa' },
				{ label: 'Specials', href: '/specials' },
				{ label: 'Gift Cards', href: '/gift-cards' },
				{ label: 'Packages', href: '/specials' },
				{ label: 'Pet Friendly', href: '/faq' }
			]
		},
		{
			title: 'Support',
			links: [
				{ label: 'Our Spa', href: '/spa' },
				{ label: 'Breakfast Menu', href: '/dining' },
				{ label: 'Our Area', href: '/area' },
				{ label: 'Weddings', href: '/weddings' },
				{ label: 'Blog', href: '/blog' },
				{ label: 'Contact Us', href: '/contact' }
			]
		}
	],
	gallery: {
		title: 'Rooms Gallery',
		images: [
			{ stem: '/images/room-queen', alt: 'Queen Suite Deluxe thumbnail' },
			{ stem: '/images/room-treetop', alt: 'Treetop Suite thumbnail' },
			{ stem: '/images/room-royal', alt: 'Royal Poinciana thumbnail' },
			{ stem: '/images/room-garden', alt: 'Garden Room thumbnail' },
			{ stem: '/images/hero', alt: 'Turquoise bedroom thumbnail' },
			{ stem: '/images/breakfast', alt: 'Breakfast by the pool thumbnail' }
		]
	},
	badges: ['Tripadvisor Choice', 'Select Registry'],
	copyright: '© 2017 The Happy Inn - All Rights Reserved.'
};
