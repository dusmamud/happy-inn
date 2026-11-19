// Single mock-data file for The Happy Inn — recreated from the client's
// reference screenshot. Real data replaces this file only after the
// client approves the design. Pages never hard-code copy.

export const site = {
	name: 'The Happy Inn',
	tagline: 'It Is The Perfect Escape',
	description:
		'The Happy Inn is a twenty-three room hotel located in downtown Staunton, Virginia — voted one of the best small towns in America by Smithsonian Magazine.',
	url: 'https://www.the-happy-inn.com',
	locale: 'en-US',
	currency: 'USD',
	contact: {
		address: '4319 Roosevelt Street, San Francisco, CA 94143',
		phone: '(012) 345 - 6789',
		phoneHref: 'tel:+10123456789',
		email: 'bookings@the-happy-inn.com'
	},
	weather: { label: 'Weather', temperature: '26°' }
};

export const nav = [
	{ label: 'Home', href: '#home', active: true },
	{ label: 'Rooms & Rates', href: '#rooms', active: false },
	{ label: 'Specials & Packages', href: '#specials', active: false },
	{ label: 'About The Inn', href: '#about', active: false },
	{ label: 'About The Area', href: '#area', active: false }
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
		{ label: 'Book A Room', href: '#booking', style: 'light', badge: '' },
		{ label: 'Renew Your Body', href: '#specials', style: 'gold', badge: '20% Off' },
		{ label: 'Special Offers Of The Month', href: '#specials', style: 'gold', badge: '' }
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
	text: 'The Happy Inn is a twenty-three room hotel located in downtown Staunton, Virginia, voted one of the best small towns in America by Smithsonian Magazine.',
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
				'The resort flows gracefully along the Eastern Shore, canopied by ancient oaks and caressed by bay breezes. It is a setting made for total relaxation, and the luxurious 9,000-square-foot european style spa is its crown jewel.',
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
				'You will find us at 4319 Roosevelt Street, San Francisco, CA 94143 — a short stroll from the neighbourhood treetops, gardens and the bay breeze of the Eastern Shore.',
				'Call us any time on (012) 345 - 6789 or write to bookings@the-happy-inn.com and we will happily plan your arrival.'
			]
		}
	],
	cta: { label: 'About The Inn', href: '#about' },
	images: {
		room: {
			stem: '/images/room-queen',
			alt: 'Classic Happy Inn room with golden bedding and dark wood furniture'
		},
		pool: {
			stem: '/images/about-pool',
			alt: 'Garden pathway lined with palm trees leading to the inn swimming pool'
		}
	}
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
	cta: { label: 'All Listings', href: '#rooms' }
};

export const rooms = [
	{
		name: 'Queen Suite Deluxe',
		description:
			'This room offers all the amenities of a great honeymoon suite or from extended romantic getaway. Watch the world of Key West go by.',
		price: 189,
		unit: '/night',
		image: {
			stem: '/images/room-queen',
			alt: 'Queen Suite Deluxe with golden bedding and dark wood headboard'
		}
	},
	{
		name: 'Treetop Suite',
		description:
			'Nestled away on the third floor and aptly named for its view out across the neighborhood treetops. The room features are great.',
		price: 125,
		unit: '/night',
		image: {
			stem: '/images/room-treetop',
			alt: 'Treetop Suite with large windows above the neighbourhood treetops'
		}
	},
	{
		name: 'Royal Poinciana',
		description:
			'Perfect writer’s retreat. Named after one of the stately trees in our great garden, you are inspired to unwind on the outside veranda.',
		price: 149,
		unit: '/night',
		image: {
			stem: '/images/room-royal',
			alt: 'Royal Poinciana room opening onto a garden veranda with tropical plants'
		}
	},
	{
		name: 'Garden Room',
		description:
			'Ground floor room has cathedral ceilings, a cool terra cotta floor, and a verdigris metal queen-size bed. French doors open.',
		price: 99,
		unit: '/night',
		image: {
			stem: '/images/room-garden',
			alt: 'Garden Room with teal metal queen bed and French doors to the garden'
		}
	}
];

export const features = [
	{
		title: 'View Our Rooms',
		description:
			'Each uniquely decorated room in our stately mansion has its own distinct personality.',
		image: { stem: '/images/room-queen', alt: 'Uniquely decorated room in the stately mansion' }
	},
	{
		title: 'Delicious Breakfast',
		description:
			'Breakfast is served poolside underneath a canopy of tropical foliage. You can linger over the morning.',
		image: {
			stem: '/images/breakfast',
			alt: 'Breakfast spread with fresh fruit, pastries and salmon served poolside'
		}
	},
	{
		title: 'Treatments',
		description:
			'Entrusts the skincare of its clients to the prestigious luxury cosmetics brand Natura Bissé.',
		image: { stem: '/images/spa', alt: 'Guest enjoying a luxury facial treatment at the inn spa' }
	},
	{
		title: 'Play Outdoors',
		description: 'There is so much to do if you ever feel like leaving your room and go nearby the inn.',
		image: { stem: '/images/outdoor', alt: 'Guests sightseeing outdoors near the inn on a sunny day' }
	},
	{
		title: 'Plan Your Wedding',
		description:
			'Our inn also can accommodate for wedding as we can provide you a nice space for your special day.',
		image: { stem: '/images/wedding', alt: 'Couple exchanging rings at a garden wedding at the inn' }
	},
	{
		title: 'Accommodations',
		description: 'Our 1904 Queen Anne Victorian mansion with its distinctive style of angled bay windows.',
		image: { stem: '/images/hero', alt: 'Turquoise bedroom inside the Queen Anne Victorian mansion' }
	}
];

export const footer = {
	about:
		'You may also enjoy the laid-back style of one of our conch cottage rooms. Our historic 1880’s cigar maker conch cottage sets the backdrop for the bright tropical colors.',
	columns: [
		{
			title: 'About',
			links: ['About The Inn', 'Room Overview', 'Our Amenities', 'Specials', 'Packages', 'Pet Friendly']
		},
		{
			title: 'Support',
			links: ['Our Spa', 'Breakfast Menu', 'Our Area', 'Weddings', 'Blog', 'Contact Us']
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
