import React from 'react'
import {View, Image, StyleSheet} from 'react-native'
import Touchable from '../components/Touchable'
import colors from '../style/colors'
import {Title} from './Text'

const Banner = ({onPress, imagePath, nome}) => {
  return (
    <Touchable onPress={onPress}>
      <View style={styles.container}>
        <Title style={{textAlign: 'center'}}>{nome}</Title>
        <Image source={imagePath} style={styles.image} resizeMode="contain" />
      </View>
    </Touchable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 6,
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 150,
  },
})

export default Banner
