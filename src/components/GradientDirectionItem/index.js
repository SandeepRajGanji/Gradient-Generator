// Write your code here
import {ListItem, TabButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, changeDirection, isActive} = props
  const {directionId, displayText} = directionDetails

  const onChangeTabId = () => {
    changeDirection(directionId)
  }

  return (
    <ListItem>
      <TabButton onClick={onChangeTabId} active={isActive}>
        {displayText}
      </TabButton>
    </ListItem>
  )
}
export default GradientDirectionItem
