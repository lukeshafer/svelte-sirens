import type { Event } from './data';
import { speakers } from './speakers';

export const events: Event[] = [
	{
		slug: 'sveltekit-for-enterprise',
		title: 'SvelteKit for Enterprise',
		date: new Date('2022-11-09T14:00:00.000Z').getTime(),
		embed: 'https://www.youtube.com/embed/_0ijqV0DmNQ',
		eventUrl: 'https://www.youtube.com/watch?v=_0ijqV0DmNQ',
		speakers: [speakers['lacey-pevey']]
	},
	{
		slug: 'upgrading-sveltekit',
		title: 'Upgrading SvelteKit',
		date: new Date('2022-09-27T13:00:00.000Z').getTime(),
		embed: 'https://www.youtube.com/embed/vzeZskhjoeQ',
		eventUrl: 'https://www.youtube.com/watch?v=vzeZskhjoeQ',
		speakers: [speakers['kev-a-k']]
	},
	{
		slug: 'storyblok-with-sveltekit',
		title: 'Storyblok with SvelteKit',
		date: new Date('2022-08-17T17:30:00.000Z').getTime(),
		embed: 'https://www.youtube.com/embed/xXHFRzqUxoE',
		eventUrl: 'https://www.youtube.com/watch?v=xXHFRzqUxoE',
		speakers: [speakers['josefine-schaefer']]
	},
	{
		slug: 'testing-in-svelte',
		title: 'Testing in Svelte',
		date: new Date('2022-07-20T17:00:00.000Z').getTime(),
		embed: 'https://www.youtube.com/embed/-GKRH0KQ_j0',
		eventUrl: 'https://www.youtube.com/watch?v=-GKRH0KQ_j0',
		speakers: [speakers['jess-sachs']]
	},
	{
		slug: 'the-story-behind-the-unofficial-svelte-newsletter',
		title: 'The story behind the (unofficial) Svelte newsletter',
		date: 1653674400000,
		embed: 'https://www.youtube.com/embed/aK0xXm3hPxk',
		eventUrl: 'https://www.youtube.com/watch?v=aK0xXm3hPxk',
		speakers: [speakers['dani-sandoval']]
	},
	{
		slug: 'sveltekit-sanityio-a-match-made-in-heaven',
		title: 'SvelteKit + Sanity.io; a match made in heaven',
		embed: 'https://www.youtube.com/embed/j0_1hfiEVWA',
		eventUrl: 'https://www.youtube.com/watch?v=j0_1hfiEVWA',
		speakers: [speakers['jacob-stordahl']],
		date: 1652461200000
	},
	{
		slug: 'building-advanced-landing-pages',
		title: 'Building Advanced Landing Pages',
		embed: 'https://www.youtube.com/embed/D8oo5dwXMQ4',
		eventUrl: 'https://www.youtube.com/watch?v=D8oo5dwXMQ4',
		speakers: [speakers['amy-dutton']],
		date: 1650042000000
	},
	{
		slug: 'build-in-3d-with-svelte',
		title: 'Build in 3D with Svelte',
		embed: 'https://www.youtube.com/embed/7PJ_28fgLp8',
		eventUrl: 'https://www.youtube.com/watch?v=7PJ_28fgLp8',
		speakers: [speakers['scott-tolinski']],
		date: 1646337600000
	},
	{
		slug: 'all-about-adapters-deploying-in-sveltekit',
		title: 'All about Adapters - Deploying in SvelteKit',
		embed: 'https://www.youtube.com/embed/SUrFDhhsJN',
		eventUrl: 'https://www.youtube.com/watch?v=SUrFDhhsJNo',
		speakers: [speakers['steph-dietz']],
		date: 1642528800000
	},
	{
		slug: 'routes-for-svelte-with-routify',
		title: 'Exploring Routify in Svelte Kit',
		embed: 'https://www.youtube.com/embed/epVRgjhjI7M',
		eventUrl: 'https://www.youtube.com/watch?v=epVRgjhjI7M',
		speakers: [speakers['ghost']],
		date: 1639764000000
	},
	{
		slug: 'building-design-systems-in-sveltekit',
		title: 'Building Design Systems in SvelteKit',
		embed: 'https://www.youtube.com/embed/3bjVQJwF6O8',
		eventUrl: 'https://www.youtube.com/watch?v=3bjVQJwF6O8',
		speakers: [speakers['brittney-postma']],
		date: 1638208800000
	}
];
