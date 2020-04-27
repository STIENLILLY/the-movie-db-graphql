import { Resolver } from '../../../types/Resolver';
import { makeRequest } from '../../API';

export default {
    Query: {
        getPopular: async () => {
            try {
                const { results } = await makeRequest('/movie/popular');
                return results;
            } catch (error) {
                throw new Error(error);
            }
        },
    },
} as Resolver;
