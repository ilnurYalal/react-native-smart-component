import React, { Component } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { styles } from './style'
import { WINDOW_WIDTH } from './../../constants'

export class PopularFeedPhoto extends Component {
  constructor(props) {
    super(props)
    this.state = {
      popularFeedPhoto: props.data
    }
  }
  
  onPressPopularItem = (index) => {
    const { popularFeedPhoto } = this.state
    alert(popularFeedPhoto.posts[index].objectId)
  }
  
  renderPopularImage = (item, index) => {
    return (
      <TouchableOpacity key={index} onPress={() => this.onPressPopularItem(index)}>
        <Image
          source={{ uri: item.thumbnail }}
          style={[styles.popularImage]}
        />
      </TouchableOpacity>
    )
  }
  
  renderContent() {
    const { popularFeedPhoto } = this.state
    if (popularFeedPhoto.posts) {
      return popularFeedPhoto.posts.map((item, index) => {
        return this.renderPopularImage(item, index)
      })
    }
    return <View />
  }
  
  render() {
    const { popularFeedPhoto } = this.state
    let height = 100
    if (popularFeedPhoto.posts) {
      height = Math.ceil(popularFeedPhoto.posts.length / 3) * (WINDOW_WIDTH / 3)
    }
    return (
      <View style={[styles.popularFeedPhotoContainer, { height }]}>
        {this.renderContent()}
      </View>
    )
  }
}