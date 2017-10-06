import { Actions } from './../actions'
import defaultValues from  './DefaultState'

export const userInfo = (state = defaultValues.userInfo, action) => {
  
  switch (action.type) {
  case Actions.SET_USERINFO: {
    let newState = { ...state }
    newState     = action.payload
    return newState
  }
  default:
    return state
  }
}

export const userFeedPhoto = (state = defaultValues.userFeedPhoto, action) => {
  switch (action.type) {
  case Actions.SET_USERFEED: {
    let newState = { ...state }
    newState     = action.payload
    return newState
  }
  default:
    return state
  }
}

export const popularFeedPhoto = (state = defaultValues.popularFeedPhoto, action) => {
  switch (action.type) {
  case Actions.SET_POPULARFEED: {
    let newState = { ...state }
    newState     = action.payload
    return newState
  }
  default:
    return state
  }
}