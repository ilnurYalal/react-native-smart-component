import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { Actions } from './../actions'

export const userInfo$ = state => state.userInfo
const userSelector$ = createSelector(userInfo$, userInfo => ({
  userInfo
}))

export const userFeedPhoto$ = state => state.userFeedPhoto
const userFeedSelector$ = createSelector(userFeedPhoto$, userFeedPhoto => ({
  userFeedPhoto
}))

export const popularFeedPhoto$ = state => state.popularFeedPhoto
const popularFeedSelector$ = createSelector(popularFeedPhoto$, popularFeedPhoto => ({
  popularFeedPhoto
}))

const mapStateToProps = state => ({
  ...userSelector$(state),
  ...userFeedSelector$(state),
  ...popularFeedSelector$(state)
})
const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...Actions }, dispatch)

export default component =>
  connect(mapStateToProps, mapDispatchToProps)(component)
