import { BASIC_URL } from '../../constants'
import { Platform } from 'react-native'

export const apiConnection = (url, body = '', method = 'GET', token = '') => {
  let header
  if (method === 'GET') {
    header = {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  } else {
    header = {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    }
  }
  return new Promise(async (resolve, reject) => {
    const onSuccess = async (response) => {
      if (response.status >= 200 && response.status <= 300) {
        // const fetchResult = await response.json();
        let data = await response.text()
        if (Platform.OS === 'android') {
          data = data.replace(/\r?\n/g, '').replace(/[\u0080-\uFFFF]/g, '');
        }
        data = JSON.parse(data)
        return resolve(data)
      }
      let data = await response.text()
      if (Platform.OS === 'android') {
        data = data.replace(/\r?\n/g, '').replace(/[\u0080-\uFFFF]/g, '');
      }
      data = JSON.parse(data)
      return resolve(data)
    }
    fetch(`${BASIC_URL}${url}`, header)
      .then(onSuccess)
      .catch(error => reject(error))
  })
}
