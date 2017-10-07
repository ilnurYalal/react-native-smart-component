import { createAction } from 'redux-actions'

/**
 * create Actions
 */
export const SET_USERINFO = 'SET_USERINFO'
const setUserInfo$ = createAction(SET_USERINFO)
export const setUserInfo = userInfo => dispatch => dispatch(setUserInfo$(userInfo))

export const SET_USERFEED = 'SET_USERFEED'
const setUserFeed$ = createAction(SET_USERFEED)
export const setUserFeed = userFeedPhoto => dispatch => dispatch(setUserFeed$(userFeedPhoto))

export const SET_POPULARFEED = 'SET_POPULARFEED'
const setPopularFeed$ = createAction(SET_POPULARFEED)
export const setPopularFeed = popularFeedPhoto => dispatch => dispatch(setPopularFeed$(popularFeedPhoto))