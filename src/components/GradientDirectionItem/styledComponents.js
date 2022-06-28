// Style your elements here
import styled from 'styled-components'

export const GradientButton = styled.button`
  width: 150px;
  opacity: ${props => (props.selected ? '1' : '0.5')};
  height: 40px;
`
