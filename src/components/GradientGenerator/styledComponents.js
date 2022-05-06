// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.color1},
    ${props => props.color2}
  );
  font-family: 'Roboto';
`
export const GradientGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1140px;
  padding: 20px;
  text-align: center;
  @media screen and (max-width: 576px) {
    max-width: 576px;
  }
`
export const Heading = styled.h1`
  color: #ededed;
  font-size: 24px;
`

export const SmallHeading = styled.p`
  color: #ffffff79;
  font-size: 20px;
`
export const ColorsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`
export const Color = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`
export const ColorCode = styled.p`
  color: #ededed;
  font-size: 14px;
`
export const Input = styled.input`
  color: #ededed;
  font-size: 14px;
  outline: none;
  border: none;
  width: 60px;
  background-color: transparent;
  height: 35px;
`
export const TabList = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
export const Generate = styled.button`
  color: #1e293b;
  background-color: #00c9b7;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px;
  font-weight: 600;
  margin: 10px;
`
