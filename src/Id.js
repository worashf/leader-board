import axios from 'axios';

const API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

const getId = async () => {
  const response = await axios.post(API_URL, { name: 'Worash @ Mic game' });
  console.log('id', response.data.result);
};

export default getId;