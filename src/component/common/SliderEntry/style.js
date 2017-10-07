import { StyleSheet, Platform } from 'react-native'
import { ITEM_WIDTH, SLIDE_HEIGHT, ITEM_HORIZONTAL_MARGIN } from './../../../constants'

const entryBorderRadius = 8

export const styles = StyleSheet.create({
  imageContainer: {
    flex           : 1,
    backgroundColor: 'white',
    borderRadius   : entryBorderRadius
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode  : 'cover',
    borderRadius: Platform.OS === 'ios' ? entryBorderRadius : 0,
    flex        : 1,
  },
  slideInnerContainer: {
    width            : ITEM_WIDTH,
    height           : SLIDE_HEIGHT,
    paddingHorizontal: ITEM_HORIZONTAL_MARGIN,
    paddingBottom    : 18
  },
  radiusMask: {
    position: 'absolute',
    bottom  : 0,
    left    : 0,
    right   : 0,
    height  : entryBorderRadius
  },
})