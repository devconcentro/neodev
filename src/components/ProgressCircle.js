import React from 'react'
import {View, StyleSheet} from 'react-native'
import colors from '../style/colors'
// import { Container } from './styles';

export default function components() {
  return <View style={styles.container}></View>
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 150,
    borderRadius: 75,
    backgroundColor: colors.white,
  },
})
