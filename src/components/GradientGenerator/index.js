import {Component} from 'react'
import StyledContext from '../../context/StyledContext'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  Heading,
  ContainerRow,
  ContainerColumn,
  GradientContainer,
  ColorInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    direction: 'top',
    setColor2: '#8ae323',
    setColor1: '#014f7b',
    color1: '#8ae323',
    color2: '#014f7b',
    selectedButton: '',
  }

  onClick = event => {
    console.log(event.target)
    this.setState({direction: event.target.id, selectedButton: event.target.id})
  }

  color1Changed = event => {
    console.log(event.target)

    this.setState({setColor1: event.target.value})
  }

  color2Changed = event => {
    console.log(event.target)
    this.setState({setColor2: event.target.value})
  }

  GenerateButtonClicked = () => {
    this.setState(prevState => ({
      color1: prevState.setColor1,
      color2: prevState.setColor2,
    }))
  }

  render() {
    const {color1, color2, direction, selectedButton} = this.state
    return (
      <StyledContext.Provider value={{direction, onButtonClick: this.onClick}}>
        <GradientContainer
          color1={color1}
          direction={direction}
          color2={color2}
          data-testid="gradientGenerator"
        >
          <Heading>Generate a CSS Color Gradient</Heading>
          <p>Choose Direction</p>
          <ContainerRow>
            {gradientDirectionsList.map(eachItem => (
              <GradientDirectionItem
                key={eachItem.directionId}
                value1={eachItem.value}
                selected={eachItem.value === selectedButton}
                text={eachItem.displayText}
              />
            ))}
          </ContainerRow>
          <p>Pick the Colors</p>
          <ContainerRow>
            <ContainerColumn>
              <p>{color1}</p>
              <ColorInput
                value={color1}
                onChange={this.color1Changed}
                type="color"
              />
            </ContainerColumn>
            <ContainerColumn>
              <p>{color2}</p>
              <ColorInput
                value={color2}
                onChange={this.color2Changed}
                type="color"
              />
            </ContainerColumn>
          </ContainerRow>
          <GenerateButton onClick={this.GenerateButtonClicked}>
            Generate
          </GenerateButton>
        </GradientContainer>
      </StyledContext.Provider>
    )
  }
}
export default GradientGenerator
