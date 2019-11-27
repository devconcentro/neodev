import React from 'react'
import {TouchableOpacity, TouchableNativeFeedback} from 'react-native'
import {isIOS} from '../util/config'

const androidRipple = [
  TouchableNativeFeedback.SelectableBackground(),
  TouchableNativeFeedback.Ripple('#AAA', true),
]

const Touchable = ({
  children,
  useForeground = true,
  onPress,
  androidBackground = 0,
}) => {
  if (isIOS) {
    return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
  }
  return (
    <TouchableNativeFeedback
      onPress={onPress}
      background={androidRipple[androidBackground]}
      useForeground={useForeground}>
      {children}
    </TouchableNativeFeedback>
  )
}

export default Touchable
