import { client } from '@gql/graphql-client';
import { queryUpcomingEvents } from '@gql/queries';

export const get = async () => {
	try {
		const upcoming = await client.request(queryUpcomingEvents, {
			tentativeDate: new Date().toISOString().slice(0, 10),
			todaysDate: new Date().toISOString()
		});

		return {
			status: 200,
			body: { upcoming }
		};
	} catch (error) {
		return {
			status: 404,
			body: error.message
		};
	}
};
