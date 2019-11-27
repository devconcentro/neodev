import React from 'react'
import {StyleSheet, View, Image} from 'react-native'
import Touchable from './Touchable'
import screen from '../util/screen'
import colors from '../style/colors'
import {Title, SubTitle} from './Text'
import reactotron from 'reactotron-react-native'
const BoxDesafio = ({image, nome, regras, premio, dataLimite}) => {
  reactotron.log(image)
  return (
    <Touchable>
      <View style={styles.container}>
        <Image
          source={{uri: image}}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.infoContainer}>
          <Title>{nome}</Title>
          {/* <SubTitle>{regras}</SubTitle> */}
        </View>
      </View>
    </Touchable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: screen.width - 30,
    borderRadius: 4,
    marginVertical: 6,
    borderEndWidth: 5,
    borderColor: colors.dark,
    paddingHorizontal: 10,
    height: 100,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 100,
  },
  infoContainer: {
    paddingLeft: 20,
    flex: 1,
  },
})

export default BoxDesafio
