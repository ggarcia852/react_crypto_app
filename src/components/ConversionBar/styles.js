import styled from "styled-components";


export const StyledBarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3%;
`;

export const StyledCurrencyName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #06d554;
  color: ${props => props.theme.color};
  width: 8vw;
  height: 3vw;
  border-radius: 10px 0px 0px 10px;
  font-size: 1.25vw;
  font-weight: 500;
`;

export const StyledCurrencyImg = styled.img`
  width: 1.75vw;
  margin: 0 3vw;
`;

export const StyledCurrencyInput = styled.input`
  background-color: ${props => props.theme.navBox};
  border: none;
  outline: 0px;
  height: 3vw;
  border-radius: 0 .5vw .5vw 0;
  font-size: 1vw;
  padding-left: 2vw;
  color: ${props => props.theme.color};
`;