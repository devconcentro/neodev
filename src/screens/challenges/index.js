import React, {useEffect, useRef, useState} from 'react'
import {Text, FlatList} from 'react-native'
import {Container} from '../../components/Container'
import Loading from '../../components/Loading'
import BoxDesafio from '../../components/BoxDesafio'
import styles from './styles'
import axios from '../../util/Axios'
import {baseURL, apiKey} from '../../util/config'
import reactotron from 'reactotron-react-native'
import colors from '../../style/colors'

const challenges = ({navigation}) => {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    const {data, status} = await axios.get(`${baseURL}/desafio?${apiKey}`)

    if (status === 200) {
      setData(data)
    }

    setLoading(false)
  }

  return (
    <Container style={styles.container}>
      <FlatList
        data={data}
        extraData={data}
        renderItem={({item}) => <BoxDesafio {...item} />}
        keyExtractor={(item, i) => `${i}`}
      />
      {isLoading && <Loading />}
    </Container>
  )
}

export default challenges
