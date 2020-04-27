import { Resolver } from '../../../types/Resolver';
import { makeRequest } from '../../API';
import { QuerySearchMovieArgs } from 'src/generated/graphql';

export default {
    Query: {
        searchMovie: async (_, { query }) => {
            try {
                const { results } = await makeRequest('/search/movie', { query });
                return results;
            } catch (error) {
                throw new Error(error);
            }
        },
    },
} as Resolver<QuerySearchMovieArgs>;
