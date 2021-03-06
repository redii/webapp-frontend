import axios from 'utils/axios'
import jwt from 'jsonwebtoken'
import history from 'utils/history'
import setAuthToken from 'utils/setAuthToken'
import { AUTH_USER } from 'constants/action-types'

export function authUser(data) {
  return {
    type: AUTH_USER,
    data: data
  }
}

export function login(data) {
  return dispatch => {
    return axios.post('/api/user/login', { user: data }).then(res => {
      if (res.data.success) {
        const token = res.data.token
        localStorage.setItem('jwtToken', token)
        setAuthToken(token)
        dispatch(authUser(jwt.decode(token)))
        history.push('/app/home')
      } else {
        // dispatch(authUser())
      }
    })
  }
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken')
    setAuthToken(false)
    dispatch(authUser({}))
    history.push('/')
  }
}
