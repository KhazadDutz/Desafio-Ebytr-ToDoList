const axios = require('axios');

async function checkUserAPI(URL, email, password) {
  // const options = {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     email,
  //     password,
  //   })
  // }
  // try {
  //   const response = await fetch(`http://localhost:3001${URL}`, options)
  //   const data = await response.json();
  //   return response.ok ? Promise.resolve(data) : Promise.reject(data);
  // } catch (error) {
  //   return { message: error };
  // }
  const response = await axios.post(`http://localhost:3001${URL}`, { email, password });
  const { status, data: { message } } = response;
  console.log(status, message);
  console.log(response, "DENTRO DO CHECKUSEAPI");
  return response;
}

export default checkUserAPI;