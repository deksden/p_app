// import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK, AUTH_GET_PERMISSIONS } from 'react-admin'
import fetch, { Request, Headers } from 'node-fetch'

import { ApiUrl } from './data-provider'

const authProvider = {
  login: ({ username, password }) => {
    const request = new Request(`${ApiUrl}/auth/login`, {
      method: 'POST',
      body: JSON.stringify({ email: username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
    return fetch(request)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText)
        }
        return response.json()
      })
      .then(({ token }) => {
        window.localStorage.setItem('token', token)
      })
  },
  logout: () => {
    window.localStorage.removeItem('token')
    return Promise.resolve()
  },
  checkError: () => Promise.resolve(),
  checkAuth: () => {
    const token = window.localStorage.getItem('token')
    if (token) {
      const request = new Request(`${ApiUrl}/me`, {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        })
      })
      return fetch(request)
        .then((res) => {
          if (res.status < 200 || res.status >= 300) {
            return Promise.reject(Error(`err ${res.status}`))
          }
          return Promise.resolve()
        })
    } else {
      return Promise.reject(Error('no auth'))
    }
  },
  getPermissions: () => Promise.reject(Error('Unknown method'))
}

export default authProvider
