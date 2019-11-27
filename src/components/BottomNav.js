import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
  TouchableNativeFeedback,
} from 'react-native'
import {Icon} from 'native-base'
import screen from '../util/screen'
import colors from '../style/colors'
import reactotron from 'reactotron-react-native'
import Touchable from './Touchable'

const screens = [
  {
    screen_id: 1,
    screen_name: 'trails',
    caption_name: 'Trilhas',
    icon_path: require('../../assets/book.png'),
    icon_path_act: require('../../assets/book_selected.png'),
  },
  {
    screen_id: 7,
    screen_name: 'challenges',
    caption_name: 'Desafios',
    icon_path: require('../../assets/challenge.png'),
    icon_path_act: require('../../assets/challenge_selected.png'),
  },
  {
    screen_id: 2,
    screen_name: 'rewards',
    caption_name: 'Recompensas',
    icon_path: require('../../assets/trophy.png'),
    icon_path_act: require('../../assets/trophy_selected.png'),
  },
  {
    screen_id: 2,
    screen_name: 'PROFILE',
    caption_name: 'Perfil',
    icon_path: require('../../assets/dots.png'),
    icon_path_act: require('../../assets/dots_selected.png'),
  },
]

const BottomNav = ({navigation, onTabPress}) => {
  const {routes, routeName, index} = navigation.state

  function renderIcon(route, isRouteActive) {
    return (
      <Image
        style={styles.icon}
        source={isRouteActive ? route.icon_path_act : route.icon_path}
      />
    )
  }

  return (
    <View style={styles.container}>
      {screens.map((route, routeIndex) => {
        const isRouteActive = routeIndex === index

        return (
          <View style={[styles.round]} key={routeIndex}>
            <Touchable
              androidBackground={1}
              key={routeIndex}
              useForeground={false}
              onPress={() => {
                navigation.navigate(route.screen_name)
              }}
              accessibilityLabel={route.routeName}>
              <View style={{alignItems: 'center', width: 50}}>
                {renderIcon(route, isRouteActive)}
              </View>
            </Touchable>
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: Platform.OS === 'ios' ? 20 : 0,
    height: Platform.OS === 'ios' ? 80 : 50,
    elevation: 3,
    backgroundColor: colors.white,
    width: screen.width,
    justifyContent: 'space-evenly',
  },
  round: {
    marginHorizontal: 5,
    width: screen.width / 4,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 24,
    width: 24,
  },
})

export default BottomNav
