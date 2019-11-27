/**
 * @format
 */

import {AppRegistry} from 'react-native'
import App from './src/routes'
import {name as appName} from './app.json'
if (__DEV__) {
  import('./src/util/ReactotronConfig')
}
AppRegistry.registerComponent(appName, () => App)
