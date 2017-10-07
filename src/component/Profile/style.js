import { StyleSheet } from 'react-native'
import { SLIDE_HEIGHT } from './../../constants'
import {WINDOW_WIDTH} from '../../constants/index'

export const styles = StyleSheet.create({
  container: {
    paddingTop: 10
  },
  userInfoContainer: {
    flexDirection    : 'row',
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingVertical: 10
  },
  userPhoto: {
    width       : 90,
    height      : 90,
    borderRadius: 45,
  },
  userInfoSubContainer: {
    flex      : 1,
    marginLeft: 15
  },
  nameTitleText: {
    color     : 'black',
    fontSize  : 16,
    fontWeight: 'bold'
  },
  descriptionContainer: {
    marginTop: 10,
  },
  descriptionText: {
    fontSize: 14
  },
  footerText: {
    color    : 'gray',
    marginTop: 5
  },
  userFeedPhotoContainer: {
    height: SLIDE_HEIGHT + 50,
  },
  slider: {
    marginTop: 25
  },
  paginationContainer: {
    paddingVertical: 8
  },
  paginationDot: {
    width           : 12,
    height          : 12,
    borderRadius    : 6,
    marginHorizontal: 8
  },
  sliderContentContainer: {
  },
  popularFeedPhotoContainer: {
    flexWrap: 'wrap',
    height  : 450
  },
  popularImage: {
    width           : (WINDOW_WIDTH - 15) / 3,
    height          : (WINDOW_WIDTH - 15) / 3,
    marginVertical  : 2.5,
    marginHorizontal: 2.5,
    resizeMode      : 'contain',
    borderRadius    : 5
  }
})