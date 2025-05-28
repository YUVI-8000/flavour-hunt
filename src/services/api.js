import axios from 'axios';
import { API_KEY, API_URL } from '../constants/constant';

// Search Recipes
export const getRecipes = async (searchedQuery) => {
    try {
        const response = await axios.get(`${API_URL}/complexSearch`, {
            params: {
                query: searchedQuery,
                number: 20,
                apiKey: API_KEY,
            }
        });
        return response.data;
    } catch (error) {
        console.log('Error while calling the API:', error.message);
        return { error: error.message };
    }
};

// Get Recipe Details
export const getRecipe = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}/information`, {
            params: {
                apiKey: API_KEY
            }
        });
        return response.data;
    } catch (error) {
        console.log('Error while calling the API:', error.message);
        return { error: error.message };
    }
};
