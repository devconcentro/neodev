import React from 'react'
import {Image, View} from 'react-native'

const Logo = () => {
  return (
    <View
      style={{
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('../../assets/logo.png')}
        style={{height: 80, width: 200}}
      />
    </View>
  )
}

export default Logo
