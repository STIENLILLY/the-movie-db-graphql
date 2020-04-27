import { Resolver } from '../../../types/Resolver';
import { makeRequest } from '../../API';

export default {
    Query: {
        getToday: async () => {
            try {
                const { results } = await makeRequest('/tv/airing_today');
                return results;
            } catch (error) {
                throw new Error(error);
            }
        },
    },
} as Resolver;
