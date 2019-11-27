import {StyleSheet} from 'react-native'
import colors from '../../style/colors'
import screen from '../../util/screen'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: colors.primary,
  },
  topContainer: {
    flex: 0.3,
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  divider: {
    height: 2,
    width: screen.width - 30,
    backgroundColor: colors.dark,
  },
  trophiesContainer: {
    justifyContent: 'space-evenly',
    flex: 0.6,
    width: screen.width - 50,
    borderRadius: 6,
  },
  pontuacao: {
    fontSize: 34,
    color: '#ffeb3b',
    fontWeight: '600',
  },
})
