import styled from "styled-components";


export const StyledBarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

export const StyledCurrencyName = styled.div`
  display: flex;
  background: #06d554;
  color: ${props => props.theme.color};
  width: 80px;
  height: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 10px 0px 0px 10px;
  font-size: 17px;
  font-weight: 500;
`;

export const StyledCurrencyImg = styled.img`
  margin: 0px 30px;
`;

export const StyledCurrencyInput = styled.input`
  background-color: ${props => props.theme.navBox};
  border: none;
  outline: 0px;
  height: 45px;
  margin: 0px;
  border-radius: 0px 10px 10px 0px;
  font-size: 14px;
  padding-left: 20px;
  color: ${props => props.theme.color};
  &:hover {
    cursor: pointer;
  }
`;