import styled from 'styled-components'
import colors from '../style/colors'

export const RegularText = styled.Text`
  color: ${props => props.color || colors.dark};
  font-size: 14;
`

export const Title = styled.Text`
  font-size: 16;
  font-weight: bold;
  color: ${colors.dark};
`
export const SubTitle = styled.Text`
  font-size: 12;
  color: ${colors.dark};
`
