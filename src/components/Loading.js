import React, {useEffect, useRef, useState} from 'react'
import LottieView from 'lottie-react-native'
import {View, StyleSheet} from 'react-native'
import colors from '../style/colors.js'

const Loading = () => {
  const refLottie = useRef(null)

  useEffect(() => {
    refLottie.current.play()
  }, [])
  return (
    <View style={styles.container}>
      <LottieView
        ref={refLottie}
        style={{width: 120, height: 120}}
        source={require('../../assets/loading.json')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    zIndex: 999,
  },
})

export default Loading
