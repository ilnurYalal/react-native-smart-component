import { apiConnection } from './ApiConnection'
import {
  GET_USER_PROFILE,
  GET_USER_FEED_PHOTO,
  SESSION_TOKEN,
  GET_POPULAR_FEED_PHOTO
} from '../../constants'

export const getUserInfo = () => {
  const body = {
    _method      : 'GET',
    _version     : '5.0.5',
    _SessionToken: SESSION_TOKEN
  }
  return new Promise((resolve, reject) => {
    apiConnection(GET_USER_PROFILE, body, 'POST')
      .then((res) => {
        return resolve(res)
      })
      .catch((e) => {
        return reject(e)
      })
  })
}

export const getUserFeedPhoto = () => {
  const body = {
    isThumbnailsOnly: true,
    limit           : 5,
    userId          : 2707798,
    _method         : 'POST',
    _version        : '5.0.5',
    _SessionToken   : SESSION_TOKEN
  }
  return new Promise((resolve, reject) => {
    apiConnection(GET_USER_FEED_PHOTO, body, 'POST')
      .then((res) => {
        return resolve(res.result)
      })
      .catch((e) => {
        return reject(e)
      })
  })
}

export const getPopularFeedPhoto = () => {
  const body = {
    isThumbnailsOnly: true,
    limit           : 18,
    _method         : 'POST',
    _version        : '5.0.5',
    _SessionToken   : SESSION_TOKEN
  }
  return new Promise((resolve, reject) => {
    apiConnection(GET_POPULAR_FEED_PHOTO, body, 'POST')
      .then((res) => {
        return resolve(res.result)
      })
      .catch((e) => {
        return reject(e)
      })
  })
}