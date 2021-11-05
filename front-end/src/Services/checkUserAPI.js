const axios = require('axios');

async function checkUserAPI(URL, email, password) {
  try {
    const data = await axios.post(`http://localhost:3001${URL}`, { email, password });
    const { status, data: { message } } = data;
    const response = {
      code: status,
      message,
    };
    return response;
  } catch (error) {
    const { response: { status, data: { message } }} = error;
    const errorMessage = {
      code: status,
      message,
    };
    return errorMessage;
  }
}

export default checkUserAPI;