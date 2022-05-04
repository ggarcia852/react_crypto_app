import styled from "styled-components";
import { devices } from "GlobalStyles/devices";

export const StyledBarContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 8%;
  @media ${devices.tablet} {
    flex-flow: row;
    justify-content: center;
    margin: 3%;
  }
`;

export const StyledConversionBox = styled.div`
  display: flex;
`

export const StyledCurrencyName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #06d554;
  color: ${props => props.theme.color};
  width: 24vw;
  height: 9vw;
  border-radius: 10px 0px 0px 10px;
  font-size: 3vw;
  font-weight: 500;
  @media ${devices.tablet} {
    font-size: 1.25vw;
    width: 8vw;
    height: 3vw;
  }
`;

export const StyledCurrencyInput = styled.input`
background-color: ${props => props.theme.navBox};
border: none;
outline: 0px;
height: 9vw;
width:50vw;
padding: 0;
border-radius: 0 .5vw .5vw 0;
font-size: 2.5vw;
padding-left: 2vw;
color: ${props => props.theme.color};
@media ${devices.tablet} {
  height: 3vw;
  width: 15vw;
  font-size: 1vw;
}
`;

export const StyledCurrencyImg = styled.img`
  width: 5vw;
  margin: 3vw;
  @media ${devices.tablet} {
    width: 1.75vw;
    margin: 0 3vw;
  }
`;