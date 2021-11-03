async function checkUserAPI(URL, email, password) {
  const options = {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    })
  }
  try {
    const response = await fetch(`http://localhost:3000${URL}`, options)
    const data = await response.json();
    return response.ok ? Promise.resolve(data) : Promise.reject(data);
  } catch (error) {
    console.log('deu ruim')
  }
}

export default checkUserAPI;