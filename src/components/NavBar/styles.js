import { NavLink } from "react-router-dom";
import styled from "styled-components"

export const StyledNavDiv = styled.div`
  display: flex;
  width: 100%;
  background: #040810;
  align-items: center;
`

export const StyledLinks = styled.div`
  display:flex;
  width: 60%;
`

export const StyledLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  color: #FAFBFB;
  font-size: 23px;
  height: 57px;
  width: 167px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  &.active {
      background: #2C2F36;
    }
`

export const StyledNavList = styled.ul`
  display: flex;
  list-style-type: none;
  height: 97px;
  align-items: center;
  margin: 0px;
`;

export const StyledNavigation = styled.div`
  display: flex;

`

export const StyledInput = styled.input`
  height: 63px;
  width: 510px;
  background: #2C2F36;
  border-radius: 15px;
  border: none;
`

export const StyledDropdown = styled.select`
  height: 63px;
  width: 135px;
  display: flex;
  background: #2C2F36;
  margin-left: 25px;
`

export const StyledButton = styled.button`
  height: 63px;
  width: 67px;
  background: #2C2F36;
  border-radius: 15px;
  border-color: #2C2F36;
  margin-left: 25px;
  margin-right: 5px;
  border: none;
`
