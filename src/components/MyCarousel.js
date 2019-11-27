import React from 'react'
import screen from '../util/screen'
import Carousel from 'react-native-snap-carousel'
import {StyleSheet} from 'react-native'

const MyCarousel = ({
  data,
  width = screen.width - 50,
  onSnapToItem,
  renderItem,
}) => {
  return (
    <Carousel
      containerCustomStyle={{overflow: 'visible'}}
      data={data}
      sliderWidth={width}
      //   layout={'tinder'}
      itemWidth={width}
      windowSize={1}
      contentContainerCustomStyle={styles.carouselContent}
      onSnapToItem={onSnapToItem}
      renderItem={renderItem}
      layoutCardOffset={15}
    />
  )
}

const styles = StyleSheet.create({content: {}})

export default MyCarousel
