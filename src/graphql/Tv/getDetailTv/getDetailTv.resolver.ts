import { Resolver } from '../../../types/Resolver';
import { makeRequest } from '../../API';
import { QueryGetDetailTvArgs } from 'src/generated/graphql';

export default {
    Query: {
        getDetailTv: async (_, { id }) => {
            try {
                const data = await makeRequest(`/tv/${id}`);
                return data;
            } catch (error) {
                throw new Error(error);
            }
        },
    },
} as Resolver<QueryGetDetailTvArgs>;
