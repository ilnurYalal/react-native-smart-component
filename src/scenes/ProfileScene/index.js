import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { Profile } from '../../component/Profile'
import { getPopularFeedPhoto, getUserFeedPhoto, getUserInfo } from '../../utilities'
import { styles } from './style'

export class ProfileScene extends Component {
  static propTypes = {
  }
  
  static navigationOptions = {
    title : 'Profile',
    header: null,
  };
  
  constructor(props) {
    super(props)
    this.state = {
      userInfo        : {},
      userFeedPhoto   : {},
      popularFeedPhoto: {},
      isLoading       : false
    }
  }
  
  componentDidMount() {
    this.onGetInfo()
  }
  
  async onGetInfo() {
    this.setState({ isLoading: true })
    try {
      const userInfo         = await getUserInfo()
      const userFeedPhoto    = await getUserFeedPhoto()
      const popularFeedPhoto = await getPopularFeedPhoto()
      this.setState({ userInfo, userFeedPhoto, popularFeedPhoto}, () => this.setState({ isLoading: false }))
    } catch (e) {
      this.setState({ isLoading: false })
      console.info('error~~', e)
    }
  }
  
  renderLoading() {
    const { isLoading } = this.state
    if (isLoading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color="white" />
        </View>
      )
    }
  }
  
  renderContent() {
    const {
      isLoading,
      userInfo,
      userFeedPhoto,
      popularFeedPhoto
    } = this.state
    if (!isLoading) {
      return (
        <Profile
          {...this.props}
          userInfo={userInfo}
          userFeedPhoto={userFeedPhoto}
          popularFeedPhoto={popularFeedPhoto}
        />
      )
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        {this.renderContent()}
        {this.renderLoading()}
      </View>
    )
  }
}