import React, {useEffect, useState} from 'react'
import {Container} from '../../components/Container'
import {View} from 'react-native'
import MyCarousel from '../../components/MyCarousel'
import styles from './styles'
import Banner from '../../components/Banner'
import axios from '../../util/Axios'
import {baseURL, apiKey} from '../../util/config'
import Loading from '../../components/Loading'

const Trails = ({navigation}) => {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    try {
      const {data, status} = await axios.get(`${baseURL}/video?${apiKey}`)
      if (status === 200) {
        setData(data)
      }
      setLoading(false)
    } catch (error) {}
  }

  function renderItem({item, index}) {
    return (
      <Banner
        imagePath={{uri: item.image}}
        {...item}
        onPress={() => console.log('aaa')}
      />
    )
  }

  return (
    <Container style={styles.container}>
      <View style={styles.carouselContainer}>
        <MyCarousel data={data} renderItem={renderItem} />
      </View>
      {isLoading && <Loading />}
    </Container>
  )
}

export default Trails
