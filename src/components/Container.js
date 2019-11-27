import styled from 'styled-components'
import colors from '../style/colors'

const bgColor = colors.primary

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.backgroundColor || bgColor};
`
