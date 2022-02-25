import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledInput = styled.input`
  height: 63px;
  width: 350px;
  background: #2c2f36;
  border-radius: 15px;
  border: none;
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
  overflow: hidden;
  background: #191B1F;
`

export const StyledListItem = styled.div`
&:hover {
  background: #2c2f36;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`;


