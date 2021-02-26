
export function getApiUserList (usersPage) {
  const page = usersPage.data
  const apiUrl = `https://reqres.in/api/users?page=${page}`
  return fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.json()
  }).then((json) => {
    return json
  })
    .catch(err => { throw err })
};

export function getApiUserDetails (userId) {
  const id = userId.data
  const apiUrl = `https://reqres.in/api/users/${id}`
  return fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
    .then((json) => json)
    .catch(err => { throw err })
};

export function getApiUserDelete (userId) {
  const id = userId.data
  const apiUrl = `https://reqres.in/api/users/${id}`
  return fetch(apiUrl, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response
  }).catch(err => { throw err })
};

export function getApiUserEdit (userData) {
  const data = userData.data
  const apiUrl = `https://reqres.in/api/users/${data.userId}`
  return fetch(apiUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      body: JSON.stringify(data)
    }
  }).then(response => response.json())
    .then((json) => json)
    .catch(err => { throw err })
};
