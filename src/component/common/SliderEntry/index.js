import React, { Component } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { ParallaxImage } from 'react-native-snap-carousel'
import { styles } from './style'

export class SliderEntry extends Component {
  
  constructor(props) {
    
    super(props)
    this.state = {
      data         : props.data,
      parallax     : props.parallax,
      parallaxProps: props.parallaxProps,
      even         : props.even
    }
  }
  
  onShowAlert = () => {
    
    const { data: { objectId } } = this.state
    alert(`You've clicked '${objectId}'`)
  }
  renderImage () {
    
    const { data: { thumbnail }, parallax, parallaxProps } = this.state
    return parallax ? (
      <ParallaxImage
        source={{ uri: thumbnail }}
        containerStyle={styles.imageContainer}
        style={[styles.image, { position: 'relative' }]}
        parallaxFactor={0.35}
        showSpinner={true}
        spinnerColor="red"
        {...parallaxProps}
      />
    ) : (
      <Image
        source={{ uri: thumbnail }}
        style={styles.image}
      />
    )
  }
  
  render () {
    
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.slideInnerContainer}
        onPress={this.onShowAlert}
      >
        <View style={styles.imageContainer}>
          {this.renderImage()}
          <View style={styles.radiusMask} />
        </View>
      </TouchableOpacity>
    )
  }
}
