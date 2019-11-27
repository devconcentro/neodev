import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import screen from '../util/screen'
import colors from '../style/colors'
import {Title} from './Text'

const Trophy = ({title, width = 0, value = 0}) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={[styles.leftBox, {width: width}]}>
          <Title>{title}</Title>
        </View>
      </View>
      <View style={styles.rigth}>
        <Text style={styles.points}>{value}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  box: {
    width: screen.width - 100,
    height: 70,
    backgroundColor: colors.white,
    borderRadius: 6,
    flexDirection: 'row',
  },
  leftBox: {
    justifyContent: 'center',
    borderRadius: 6,
    alignItems: 'center',
    backgroundColor: '#81d4fa',
    //borderBottomRightRadius: 100,
    //borderTopRightRadius: 100,
  },
  rigth: {
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  points: {
    fontSize: 30,
    color: colors.white,
  },
})

export default Trophy
