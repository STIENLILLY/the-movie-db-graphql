import { Resolver } from '../../../types/Resolver';
import { makeRequest } from '../../API';
import { QueryGetDetailArgs } from 'src/generated/graphql';

export default {
    Query: {
        getDetail: async (_, { id }) => {
            try {
                const data = await makeRequest(`/movie/${id}`);
                return data;
            } catch (error) {
                throw new Error(error);
            }
        },
    },
} as Resolver<QueryGetDetailArgs>;
