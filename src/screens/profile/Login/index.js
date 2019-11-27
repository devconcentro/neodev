import React, {useState, useEffect, useRef} from 'react'
import {View, Keyboard} from 'react-native'
import RegularInput from '../../../components/RegularInput'
import {Container} from '../../../components/Container'
import styles from './styles'
import Button from '../../../components/Button'
import {RegularText} from '../../../components/Text'
import colors from '../../../style/colors'
import Logo from '../../../components/Logo'
import Loading from '../../../components/Loading'
import axios from '../../../util/Axios'
import {baseURL, apiKey} from '../../../util/config'
import Touchable from '../../../components/Touchable'

const Login = ({navigation}) => {
  const [login, setLogin] = useState('')
  const [pass, setPass] = useState('')
  const [isLoading, setLoading] = useState(false)
  const loginRef = useRef(null)
  const passRef = useRef(null)

  async function onLogin() {
    Keyboard.dismiss()
    setLoading(true)
    try {
      const {data, status} = await axios.post(
        `${baseURL}/autenticar?${apiKey}`,
        {
          usuario: 'teste',
          senha: '123456',
        },
      )
      setLoading(false)
      if (status === 201) {
        navigation.navigate('Home')
      }
    } catch (error) {
      setLoading(false)
      alert(data.mensagem)
    }
  }

  return (
    <Container>
      <Logo />

      <View style={styles.form}>
        <View style={styles.inputs}>
          <RegularInput
            placeholder={'E-mail'}
            iconName="ios-contact"
            autoFocus
            ref={loginRef}
            onChangeText={value => setLogin(value)}
            value={login}
            onSubmitEditing={() => passRef.current.focus()}
          />
          <RegularInput
            placeholder={'Senha'}
            iconName="lock"
            onChangeText={value => setPass(value)}
            value={pass}
            ref={passRef}
            onSubmitEditing={onLogin}
          />
        </View>

        <View style={styles.button}>
          <Button text={'Acessar'} onPress={onLogin} />
        </View>

        <View style={styles.links}>
          <Touchable onPress={() => navigation.navigate('SignUp')}>
            <RegularText color={colors.white}>Primeiro acesso?</RegularText>
          </Touchable>
          <Touchable>
            <RegularText color={colors.white}>Esqueceu a Senha?</RegularText>
          </Touchable>
        </View>
      </View>
      {isLoading && <Loading />}
    </Container>
  )
}

export default Login
