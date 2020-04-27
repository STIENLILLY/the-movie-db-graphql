import { Resolver } from '../../../types/Resolver';
import { makeRequest } from '../../API';

export default {
    Query: {
        getTopRated: async () => {
            try {
                const { results } = await makeRequest('/tv/top_rated');
                return results;
            } catch (error) {
                throw new Error(error);
            }
        },
    },
} as Resolver;
