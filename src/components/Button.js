import React from 'react'
import Touchable from './Touchable'
import {Text, View} from 'react-native'
import colors from '../style/colors'
import screen from '../util/screen'
import {RegularText} from './Text'

const Button = ({
  width = screen.width / 1.2,
  height = 40,
  borderRadius = 6,
  text,
  onPress,
}) => {
  return (
    <Touchable onPress={onPress}>
      <View
        style={{
          width: width,
          height: height,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.white,
          borderRadius: borderRadius,
        }}>
        <RegularText>{text}</RegularText>
      </View>
    </Touchable>
  )
}

export default Button
