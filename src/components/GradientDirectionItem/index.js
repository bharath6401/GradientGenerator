// Write your code here
import {GradientButton} from './styledComponents'
import StyledContext from '../../context/StyledContext'

const GradientDirectionItem = props => {
  const {value1, text, selected} = props
  const num = 0
  return (
    <StyledContext.Consumer>
      {value => {
        const {onButtonClick} = value

        return (
          <li>
            <GradientButton
              id={value1}
              onClick={onButtonClick}
              direction={value1}
              selected={selected}
            >
              {text}
            </GradientButton>
          </li>
        )
      }}
    </StyledContext.Consumer>
  )
}
export default GradientDirectionItem
