// Style your elements here
// Style your elements here
import styled from 'styled-components'

export const ContainerRow = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
`

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.h1`
  color: white;
`
export const GradientContainer = styled.div`
  color: white;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.color1},
    ${props => props.color2}
  );
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ColorInput = styled.input`
  border: 0px;
  padding: 0px;

  border-radius: 5px;
  margin: 20px;
`

export const GenerateButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: blue;
  border: 0px;
  border-radius: 5px;
  color: white;
`
