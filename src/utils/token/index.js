export function isLogin () {
  if (localStorage.getItem('loginToken')) {
    return true
  } else return null
}

export function setLogin (token) {
  localStorage.setItem('loginToken', token)
}

export function setLogout (token) {
  localStorage.removeItem('loginToken', token)
}
