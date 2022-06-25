import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  background: ${(props) => props.theme.secondary};
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2% 1% 2% 8%;
`;

export const StyledRightNav = styled.nav`
  display: flex;
  width: 30%;
  justify-content: space-between;
  margin-right: 8%;
`;

export const NavBarBottomWrapper = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0%;
  width: 100vw;
  height: 9vh;
  background: ${(props) => props.theme.secondary};
`;
export const NavBarBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 8%;
  margin-top: 2%;
`;

export const StyledInputImg = styled.img`
  width: 33px;
  height: 33px;
`;

export const StyledLink = styled(NavLink)`
  // width: 30px;
`;
