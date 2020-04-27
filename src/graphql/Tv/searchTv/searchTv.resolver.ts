import { Resolver } from '../../../types/Resolver';
import { makeRequest } from '../../API';
import { QuerySearchTvArgs } from 'src/generated/graphql';

export default {
    Query: {
        searchTv: async (_, { query }) => {
            try {
                const { results } = await makeRequest('/search/tv', { query });
                return results;
            } catch (error) {
                throw new Error(error);
            }
        },
    },
} as Resolver<QuerySearchTvArgs>;
