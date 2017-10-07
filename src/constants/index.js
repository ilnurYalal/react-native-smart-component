import { Dimensions } from 'react-native'


export const BASIC_URL              = 'http://api.pumpup.com'
export const GET_USER_PROFILE       = '/1/classes/User/318381'
export const GET_USER_FEED_PHOTO    = '/1/functions/feed/profile/load-batch'
export const GET_POPULAR_FEED_PHOTO = '/1/functions/feed/popular/load-batch'

const { width, height }             = Dimensions.get('window')
export const WINDOW_WIDTH           = width
export const WINDOW_HEIGHT          = height
export const SLIDE_WIDTH            = (width * 75) / 100
export const SLIDE_HEIGHT           = height * 0.4
export const ITEM_HORIZONTAL_MARGIN = (width * 2) / 100
export const ITEM_WIDTH             = SLIDE_WIDTH + ITEM_HORIZONTAL_MARGIN * 2



export const SESSION_TOKEN = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g`