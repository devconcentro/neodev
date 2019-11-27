import React from 'react'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from 'react-navigation-stack'
import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import BottomNav from './components/BottomNav'
import challenges from './screens/challenges/index'
import Login from './screens/profile/Login'
import SignUp from './screens/profile/signup'
import trails from './screens/trails'
import rewards from './screens/rewards'

const TabBarComponent = props => <BottomNav {...props} />

const profileNav = createSwitchNavigator({
  Login,
  SignUp,
})

const BottomTab = createBottomTabNavigator(
  {
    trails,
    challenges,
    rewards,
  },
  {
    tabBarComponent: props => <TabBarComponent {...props} />,
  },
)

const mainNav = createSwitchNavigator({
  profileNav,
  Home: BottomTab,
})

const Nav = createAppContainer(mainNav)

const App = () => <Nav />

export default App
