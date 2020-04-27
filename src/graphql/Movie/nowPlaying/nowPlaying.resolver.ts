import { Resolver } from '../../../types/Resolver';
import { makeRequest } from '../../API';

export default {
    Query: {
        nowPlaying: async () => {
            try {
                const { results } = await makeRequest('/movie/now_playing');
                return results;
            } catch (error) {
                throw new Error(error);
            }
        },
    },
} as Resolver;
