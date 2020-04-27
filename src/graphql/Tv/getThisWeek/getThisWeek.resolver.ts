import { Resolver } from '../../../types/Resolver';
import { makeRequest } from '../../API';

export default {
    Query: {
        getThisWeek: async () => {
            try {
                const { results } = await makeRequest('/tv/on_the_air');
                return results;
            } catch (error) {
                throw new Error(error);
            }
        },
    },
} as Resolver;
