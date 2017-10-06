import React, { Component } from 'react'
import {
  View,
  Image,
  Text,
} from 'react-native'
import Autolink from 'react-native-autolink'
import ReadMore from '@expo/react-native-read-more-text'
import { styles } from './style'

export class UserInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: props.data
    }
  }
  
  onPressLink = (url, linkObject) => {
    alert(linkObject.matchedText)
  }
  
  onDesLayout = ({nativeEvent}) => {
    console.info('nativeEvent', nativeEvent)
  }
  
  renderTruncatedFooter = (handlePress) => {
    return (
      <Text style={styles.footerText} onPress={handlePress}>
        Read more
      </Text>
    )
  }
  
  renderRevealedFooter = (handlePress) => {
    return (
      <Text style={styles.footerText} onPress={handlePress}>
        Show less
      </Text>
    )
  }
  
  renderDescription() {
    const { info } = this.state
    return (
      <View style={styles.descriptionContainer}>
        {info.bio &&
        <ReadMore
          numberOfLines={2}
          renderTruncatedFooter={this.renderTruncatedFooter}
          renderRevealedFooter={this.renderRevealedFooter}
        >
          <Autolink
            text={info.bio}
            style={styles.descriptionText}
            numberOfLines={3}
            hashtag="instagram"
            mention="twitter"
            onPress={this.onPressLink}
            url={true}
            onLayout={this.onDesLayout}
          />
        </ReadMore>}
      </View>
    )
  }
  
  render() {
    const { info } = this.state
    return (
      <View style={styles.userInfoContainer}>
        <Image source={{uri: info.profileThumbnail }} style={styles.userPhoto}/>
        <View style={styles.userInfoSubContainer}>
          <Text style={styles.nameTitleText}>
            {info.name}
          </Text>
          {this.renderDescription()}
        </View>
      </View>
    )
  }
}