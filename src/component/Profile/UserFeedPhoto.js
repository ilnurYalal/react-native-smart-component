import React, { Component } from 'react'
import { View } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { WINDOW_WIDTH, ITEM_WIDTH } from './../../constants'
import { SliderEntry } from './../common'
import { styles } from './style'

export class UserFeedPhoto extends Component {
  
  constructor(props) {
    
    super(props)
    this.state = {
      userFeedPhoto     : props.data,
      sliderRef        : null,
      sliderActiveSlide: 1
    }
  }
  
  onSetRef = (ref) => {
    
    const { sliderRef } = this.state
    if (!sliderRef) {
      this.setState({ sliderRef: ref })
    }
  }
  
  onSnapToItem = (index) => {
    
    this.setState({ sliderActiveSlide: index })
  }
  
  renderItemWithParallax = ({ item }, parallaxProps) => {
    
    return (
      <SliderEntry
        data={item}
        even={false}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    )
  }
  
  renderContent() {
    const { userFeedPhoto } = this.state
    
    if (userFeedPhoto.posts) {
      return (
        <Carousel
          ref={this.onSetRef}
          data={userFeedPhoto.posts}
          renderItem={this.renderItemWithParallax}
          sliderWidth={WINDOW_WIDTH}
          itemWidth={ITEM_WIDTH}
          hasParallaxImages={true}
          firstItem={1}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          enableMomentum={false}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          loop={true}
          loopClonesPerSide={3}
          autoplay={false}
          autoplayDelay={500}
          autoplayInterval={3000}
          onSnapToItem={this.onSnapToItem}
        />
      )
    }
    return <View />
  }
  
  renderPagination() {
    const { userFeedPhoto, sliderActiveSlide , sliderRef} = this.state
  
    if (userFeedPhoto.posts) {
      return (
        <Pagination
          dotsLength={userFeedPhoto.posts.length}
          activeDotIndex={sliderActiveSlide}
          containerStyle={styles.paginationContainer}
          dotColor="steelblue"
          dotStyle={styles.paginationDot}
          inactiveDotColor="black"
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          carouselRef={sliderRef}
          tappableDots={!!sliderRef}
        />
      )
    }
    return <View />
  }
  
  render() {
    return (
      <View style={styles.userFeedPhotoContainer}>
        {this.renderContent()}
        {this.renderPagination()}
      </View>
    )
  }
}