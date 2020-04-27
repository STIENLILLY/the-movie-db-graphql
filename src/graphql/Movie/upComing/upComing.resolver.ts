import { Resolver } from '../../../types/Resolver';
import { makeRequest } from '../../API';

export default {
    Query: {
        upComing: async () => {
            try {
                const { results } = await makeRequest('/movie/upcoming', { region: 'kr' });
                return results;
            } catch (error) {
                throw new Error(error);
            }
        },
    },
} as Resolver;
