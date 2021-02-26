export const loginUserService = (request) => {
  const LOGIN_API_ENDPOINT = `https://reqres.in/api/login?email=${request.user.email}&password=${request.user.password}`
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request.user)
  }

  return fetch(LOGIN_API_ENDPOINT, parameters)
    .then(response => {
      return response.json()
    })
    .then((json) => {
      const token = json.token
      localStorage.removeItem('loginToken')
      if (token) {
        localStorage.setItem('loginToken', token)
      }
      return json
    })
    .catch((error) => console.log('error login service' + error)
    )
}
