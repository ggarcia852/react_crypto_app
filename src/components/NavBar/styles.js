import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { devices } from "GlobalStyles/devices";

export const NavContainer = styled.div`
  background: ${(props) => props.theme.secondary};
`;

export const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledNavLinks = styled.div`
  display: flex;
  align-items: center;
  margin: 1% 5%;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.color};
  font-size: 1.75vw;
  padding: 1vw 1.5vw;
  border-radius: 12px;
  &:hover {
    opacity: 0.8;
  }
  &.active {
    background: ${(props) => props.theme.navBox};
  }
`;

export const StyledNavOptions = styled.div`
  display: flex;
  align-items:center;
  gap: 1vw;
`;

export const StyledThemeButton = styled.button`
  padding: 1vw;
  background: ${(props) => props.theme.navBox};
  border-radius: 12px;
  border-color: #2c2f36;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledImg = styled.img`
  width: 1.75vw;
  height: 1.75vw;
`
