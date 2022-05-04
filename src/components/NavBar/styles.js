import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
  align-items: center;
  justify-content: end;
  width: 40%;
  gap: 2vw;
`;
