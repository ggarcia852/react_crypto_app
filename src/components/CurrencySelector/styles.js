import styled from "styled-components";

export const StyledContainer = styled.div`
  height: 63px;
  width: 135px;
  display: flex;
  background: #2c2f36;
  margin-left: 25px;
  border-radius: 15px;
  align-items: center;
`;
export const StyledDropdown = styled.select`
  display: flex;
  border: none;
  outline: 0px;
  background: #2c2f36;
  color: #ffffff;
  font-size: 17px;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledBackground = styled.div`
  background: #191b1f;
  width: 33px;
  height: 35px;
  border-radius: 20px;
  margin: 10px;
`;

export const StyledImg = styled.img`
  width: 33px;
`;
