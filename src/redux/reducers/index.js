import { combineReducers } from 'redux'
import { userFeedPhoto, popularFeedPhoto, userInfo } from './Reducers'

export default combineReducers({
  userFeedPhoto,
  popularFeedPhoto,
  userInfo
})
