import React from 'react'
import {Item, Icon, Input} from 'native-base'
import {StyleSheet} from 'react-native'
import colors from '../style/colors'
import {TextInput} from 'react-native-gesture-handler'

const RegularInput = React.forwardRef(
  (
    {
      placeholder,
      value,
      keyboardType,
      onChangeText,
      onSubmitEditing,
      iconName,
      autoFocus,
    },
    ref,
  ) => {
    return (
      <Item style={[styles.input]}>
        <Icon active name={iconName} style={{color: colors.white}} />
        <TextInput
          ref={ref}
          autoFocus={autoFocus}
          placeholder={placeholder}
          placeholderTextColor={colors.white}
          blurOnSubmit={false}
          keyboardType={keyboardType}
          autoCorrect={false}
          style={styles.text}
          onSubmitEditing={onSubmitEditing}
          autoCapitalize="none"
          onChangeText={onChangeText}
          value={value}
          clearButtonMode="while-editing"
        />
      </Item>
    )
  },
)

const styles = StyleSheet.create({
  input: {
    borderColor: colors.white,
    marginTop: 20,
  },
  text: {
    color: colors.white,
    fontSize: 16,
  },
})

export default RegularInput
