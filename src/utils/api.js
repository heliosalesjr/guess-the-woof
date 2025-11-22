import axios from 'axios';

const API_URL = 'https://api.thedogapi.com/v1';
// TheDogAPI doesn't strictly require an API key for basic GET requests, 
// but it's good practice. We'll proceed without one for now as per requirements,
// or use a placeholder if needed. The free tier allows access without key for some endpoints.

export const fetchBreeds = async () => {
    try {
        const response = await axios.get(`${API_URL}/breeds`);
        return response.data;
    } catch (error) {
        console.error("Error fetching breeds:", error);
        return [];
    }
};

export const fetchRandomDogImage = async (breedId) => {
    try {
        const response = await axios.get(`${API_URL}/images/search`, {
            params: {
                breed_ids: breedId,
                limit: 1
            }
        });
        return response.data[0];
    } catch (error) {
        console.error("Error fetching dog image:", error);
        return null;
    }
};
