// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  color: #334155;
  padding: 10px;
  margin: 10px;
`
export const TabButton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px;
  width: 100px;
  opacity: ${props => (props.active ? 1 : 0.5)};
`
