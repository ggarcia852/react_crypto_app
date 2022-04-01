import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledContainer = styled.div`
  display: flex;
  height: 63px;
  width: 350px;
  background: #2c2f36;
  border-radius: 15px;
  border: none;
  align-items: center;
`;

export const StyledInput = styled.input`
  height: 60px;
  background: #2c2f36;
  border: none;
  outline: 0px;
  font-size: 17px;
  color: #ffffff;
  &::-webkit-input-placeholder {
    color: #ffffff;
  }
`;

export const StyledList = styled.div`
  position: absolute;
  max-height: 150px;
  min-width: 150px;
  overflow: scroll;
  background: #212329;
  border: 1px solid #191B1F;
  border-radius: 5px;
`;

export const StyledListItem = styled.div`
&:hover {
  background: #146AE3;
`;

export const StyledLink = styled(Link)`
  padding: 10px 15px;
  text-decoration: none;
  color: #ffffff;
`;

export const StyledImg = styled.img`
  width: 25px;
  margin: 0px 15px;
`;
