import React from 'react'
import {TextInput} from 'react-native'
import colors from '../style/colors'
import screen from '../util/screen'

const RoundedInput = React.forwardRef(
  (
    {
      autoFocus,
      placeholder,
      placeholderTextColor = colors.darkGray,
      value,
      onChangeText,
      onSubmitEditing,
      secureTextEntry,
    },
    ref,
  ) => {
    return (
      <TextInput
        ref={ref}
        autoFocus={autoFocus}
        style={[styles.input]}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        underlineColorAndroid="transparent"
      />
    )
  },
)

const styles = {
  input: {
    backgroundColor: '#fff',
    height: 44,
    paddingHorizontal: 15,
    fontSize: 16,
    color: colors.dark,
    borderRadius: 6,
    width: screen.width / 1.1,
  },
}

export default RoundedInput
