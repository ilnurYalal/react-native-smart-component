import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { styles } from './style'
import { UserInfo } from './UserInfo'
import { UserFeedPhoto } from './UserFeedPhoto'
import { PopularFeedPhoto } from './PopularFeedPhoto'

export class Profile extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      userInfo        : props.userInfo,
      userFeedPhoto   : props.userFeedPhoto,
      popularFeedPhoto: props.popularFeedPhoto
    }
  }
  
  componentWillReceiveProps(nextProps) {
    const { userInfo, userFeedPhoto, popularFeedPhoto } = this.state
    if (userInfo !== nextProps.userInfo) {
      this.setState({ userInfo: nextProps.userInfo })
    }
    if (userFeedPhoto !== nextProps.userFeedPhoto) {
      this.setState({ userFeedPhoto: nextProps.userFeedPhoto })
    }
    if (popularFeedPhoto !== nextProps.popularFeedPhoto) {
      this.setState({ popularFeedPhoto: nextProps.popularFeedPhoto })
    }
  }
  
  renderUserInfo() {
    const { userInfo } = this.state
    return (
      <UserInfo data={userInfo}/>
    )
  }
  
  renderUserFeedPhoto() {
    const { userFeedPhoto } = this.state
    return (
      <UserFeedPhoto data={userFeedPhoto}/>
    )
  }
  
  renderPopularFeedPhoto() {
    const { popularFeedPhoto } = this.state
    return (
      <PopularFeedPhoto data={popularFeedPhoto}/>
    )
  }
  
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {this.renderUserInfo()}
        {this.renderUserFeedPhoto()}
        {this.renderPopularFeedPhoto()}
      </ScrollView>
    )
  }
}