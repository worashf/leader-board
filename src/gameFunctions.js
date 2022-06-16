import axios from 'axios';

const API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/HIvycq8iThKiLWJytHZh ';

export const getScores = async () => {
  try {
    const response = await axios.get(`${API_URL}/scores`);
    return response.data.result;
  } catch (err) {
    return [];
  }
};

export const addGames = async (user, score) => {
  try {
    const response = await axios.post(`${API_URL}/scores`, { user, score });

    return response.data.result;
  } catch (err) {
    return 'some thing is wrong';
  }
};