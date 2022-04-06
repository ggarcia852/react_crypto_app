import styled from "styled-components";

export const StyledContainer = styled.div`
  height: 63px;
  width: 135px;
  display: flex;
  background: ${props => props.theme.navBox};
  margin-left: 25px;
  border-radius: 15px;
  align-items: center;
`;
export const StyledDropdown = styled.select`
  display: flex;
  border: none;
  outline: 0px;
  background: ${props => props.theme.navBox};
  color :${props => props.theme.color};
  font-size: 17px;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledBackground = styled.div`
  background: ${props => props.theme.secondary};
  width: 33px;
  height: 35px;
  border-radius: 20px;
  margin: 10px;
`;

export const StyledImg = styled.img`
  width: 33px;
`;
