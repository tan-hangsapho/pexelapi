import axios from "axios";

const BASE_URL = "https://api.pexels.com/v1";
const PEXELS_API_KEY =
  "NINC3HZx9KHKXiYX9LpoIkBIdJDs8PRJnNMRzgGKd7eUlQSX38o08chf";
export const getPhoto = async (searchQuery: string) => {
  const response = await axios.get(`${BASE_URL}/search`, {
    params: {
      query: searchQuery,
      per_page: 1, // Fetch only one photo
    },
    headers: {
      Authorization: (process.env.PEXELS_API_KEY = `${PEXELS_API_KEY}`),
    },
  });

  return response.data.photos[0].src.original;
};
