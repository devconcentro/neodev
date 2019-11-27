import {Container} from '../../components/Container'
import ProgressCircle from '../../components/ProgressCircle'
import React from 'react'
import styles from './styles'
import {Image, View, Text} from 'react-native'
import Trophy from '../../components/Trophy'

const Rewards = () => {
  return (
    <Container style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={require('../../../assets/trophy_gold.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.divider} />
      <View style={styles.trophiesContainer}>
        <Trophy title="Cursos" width={180} value={30} />
        <Trophy title="Desafios" width={100} value={15} />
        <Trophy title="Quiz" width={120} value={25} />
      </View>
      <Text style={styles.pontuacao}>70 Pontos</Text>
    </Container>
  )
}

export default Rewards
