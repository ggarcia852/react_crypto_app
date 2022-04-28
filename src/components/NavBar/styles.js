import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { devices } from "GlobalStyles/devices";

export const NavContainer = styled.div`
  background: ${(props) => props.theme.secondary};
  width: 100%;
`;

export const StyledNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledNavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 1% 5%;
  padding: 0px;
  gap: 10%;
  width: 100%;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme.color};
  font-size: 2vw;
  width: 100%;
  padding: 10% 15%;
  border-radius: 10px;
  &:hover {
    opacity: 0.8;
  }
  &.active {
    background: ${(props) => props.theme.navBox};
  }
`;

export const StyledNavOptions = styled.div`
  display: flex;
  gap: 5%;
`;

export const StyledThemeButton = styled.button`
  // height: 100;
  // width: 67px;
  background: ${(props) => props.theme.navBox};
  border-radius: 10px;
  border-color: #2c2f36;
  margin: 1%;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledImg = styled.img`
  width: 2vw;
  padding: 10px;

`
