import { Resolver } from '../../../types/Resolver';
import { makeRequest } from '../../API';

export default {
    Query: {
        getPopularTv: async () => {
            try {
                const { results } = await makeRequest('/tv/popular');
                return results;
            } catch (error) {
                throw new Error(error);
            }
        },
    },
} as Resolver;
