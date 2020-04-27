import { Resolver } from '../../../types/Resolver';
import { makeRequest } from '../../API';

export default {
    Query: {
        getDiscover: async () => {
            try {
                const { results } = await makeRequest('/discover/movie');
                return results;
            } catch (error) {
                throw new Error(error);
            }
        },
    },
} as Resolver;
