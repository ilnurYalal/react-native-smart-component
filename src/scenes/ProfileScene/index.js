import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { Profile } from '../../component/Profile'
import { getPopularFeedPhoto, getUserFeedPhoto, getUserInfo } from '../../utilities'
import { styles } from './style'

class _ProfileScene extends Component {
  static propTypes = {
  }
  
  static navigationOptions = {
    title : 'Profile',
    header: null,
  };
  
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false
    }
  }
  
  componentDidMount() {
    this.onGetInfo()
  }
  
  onGetInfo = async () => {
    this.setState({ isLoading: true })
    try {
      const userInfo         = await getUserInfo()
      const userFeedPhoto    = await getUserFeedPhoto()
      const popularFeedPhoto = await getPopularFeedPhoto()
      
      this.props.setUserInfo(userInfo)
      this.props.setUserFeed(userFeedPhoto)
      this.props.setPopularFeed(popularFeedPhoto)
      
      this.setState({ isLoading: false })
    } catch (e) {
      this.setState({ isLoading: false })
      console.info('error~~', e)
    }
  }
  
  renderLoading = () => {
    const { isLoading } = this.state
    if (isLoading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color="white" />
        </View>
      )
    }
  }
  
  renderContent = () => {
    const { isLoading } = this.state
    if (!isLoading) {
      return (
        <Profile {...this.props} />
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

import userContainer from './../../redux/containers'
const ProfileScene = userContainer(_ProfileScene)
export default ProfileScene