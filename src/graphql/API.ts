import axios from 'axios';
import { TMDB_KEY, BASE_URL } from '../constants';

export const makeRequest = async (path: string, params: any = {}) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/3${path}`, {
            params: {
                ...params,
                api_key: TMDB_KEY,
            },
        });
        return data;
    } catch (error) {
        throw new Error(error);
    }
};
