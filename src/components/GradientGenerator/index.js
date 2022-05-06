import {Component} from 'react'
import {
  AppContainer,
  GradientGeneratorContainer,
  Heading,
  SmallHeading,
  ColorsContainer,
  ColorCode,
  Color,
  Input,
  Generate,
  TabList,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

export default class GradientGenerator extends Component {
  state = {
    activeTabId: gradientDirectionsList[0].directionId,
    orientation: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
    colorChange1: '#8ae323',
    colorChange2: '#014f7b',
  }

  changeColor1 = event => {
    this.setState({
      colorChange1: event.target.value,
    })
  }

  changeColor2 = event => {
    this.setState({
      colorChange2: event.target.value,
    })
  }

  changeDirection = id => {
    const updatedTab = gradientDirectionsList.filter(
      eachDirection => eachDirection.directionId === id,
    )
    this.setState({
      activeTabId: updatedTab[0].directionId,
      orientation: updatedTab[0].value,
    })
  }

  generateGradient = () => {
    const {colorChange1, colorChange2, color2, color1} = this.state
    let updatedColor1 = colorChange1
    let updatedColor2 = colorChange2
    if (updatedColor1 === '') {
      updatedColor1 = color1
    }
    if (updatedColor2 === '') {
      updatedColor2 = color2
    }
    this.setState({
      color1: updatedColor1,
      color2: updatedColor2,
    })
  }

  render() {
    const {
      activeTabId,
      color1,
      color2,
      colorChange1,
      colorChange2,
      orientation,
    } = this.state

    return (
      <AppContainer
        color1={color1}
        color2={color2}
        direction={orientation}
        data-testid="gradientGenerator"
      >
        <GradientGeneratorContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <SmallHeading>Choose Direction</SmallHeading>
          <TabList>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                directionDetails={eachDirection}
                changeDirection={this.changeDirection}
                isActive={eachDirection.directionId === activeTabId}
              />
            ))}
          </TabList>
          <SmallHeading>Pick the Colors</SmallHeading>
          <ColorsContainer>
            <Color>
              <ColorCode>{colorChange1}</ColorCode>
              <Input
                type="color"
                onChange={this.changeColor1}
                value={colorChange1}
              />
            </Color>
            <Color>
              <ColorCode>{colorChange2}</ColorCode>
              <Input
                type="color"
                onChange={this.changeColor2}
                value={colorChange2}
              />
            </Color>
          </ColorsContainer>
          <Generate onClick={this.generateGradient}>Generate</Generate>
        </GradientGeneratorContainer>
      </AppContainer>
    )
  }
}
