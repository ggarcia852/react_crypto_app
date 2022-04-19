import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavDiv = styled.div`
  display: flex;
  width: 100%;
  height: 93px;
  background: ${props => props.theme.secondary};
  align-items: center;
  justify-content: space-between;
`;

export const StyledLinks = styled.div`
  display: flex;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  color: ${props => props.theme.color};
  font-size: 23px;
  height: 57px;
  width: 167px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  &:hover{
    opacity: .7;
}
  &.active {
    background: ${props => props.theme.navBox};
  }
`;

export const StyledNavList = styled.ul`
  display: flex;
  list-style-type: none;
  align-items: center;
  margin-left: 93px;
  padding: 0px;
`;

export const StyledNavigation = styled.div`
  display: flex;
`;

export const StyledButton = styled.button`
  height: 63px;
  width: 67px;
  background:${props => props.theme.navBox};
  border-radius: 15px;
  border-color: #2c2f36;
  margin-left: 25px;
  margin-right: 5px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
