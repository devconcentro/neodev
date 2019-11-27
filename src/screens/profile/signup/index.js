import {Container} from '../../../components/Container'
import {View} from 'react-native'
import React, {useState, useEffect, Fragment} from 'react'
import RoundedInput from '../../../components/RoundedInput'
import styles from './styles'
import Logo from '../../../components/Logo'
import Button from '../../../components/Button'

const SignUp = ({navigation}) => {
  const [page, setPage] = useState(0)

  function onNext() {
    if (page < 2) {
      setPage(page + 1)
      return
    }

    navigation.navigate('Home')
  }

  return (
    <Container>
      <Logo />
      <View style={styles.form}>
        {page === 0 && (
          <Fragment>
            <RoundedInput autoFocus placeholder={'Nome'} />
            <RoundedInput placeholder={'Email'} />
            <RoundedInput placeholder={'Senha'} />
          </Fragment>
        )}
        {page === 1 && (
          <Fragment>
            <RoundedInput autoFocus placeholder={'aaaa'} />
            <RoundedInput placeholder={'bbbb'} />
            <RoundedInput placeholder={'cccc'} />
          </Fragment>
        )}
        {page === 2 && (
          <Fragment>
            <RoundedInput autoFocus placeholder={'eeee'} />
            <RoundedInput placeholder={'fdfdfd'} />
            <RoundedInput placeholder={'cccasdasdsac'} />
          </Fragment>
        )}
        <Button text={'Próximo'} onPress={onNext} />
      </View>
    </Container>
  )
}

export default SignUp
