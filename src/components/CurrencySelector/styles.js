import styled from "styled-components";
import { devices } from "GlobalStyles/devices";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2%;
  height: 5vh;
  background: ${(props) => props.theme.navBox};
  border-radius: 12%;
  @media ${devices.tablet} {
    border-radius: 8px;
    height: 60%;
  }
`;

export const StyledDropdown = styled.select`
  display: flex;
  border: none;
  outline: 0px;
  background: ${(props) => props.theme.navBox};
  color: ${(props) => props.theme.color};
  font-size: 2vw;
  &:hover {
    cursor: pointer;
  }
  @media ${devices.tablet} {
    font-size: 12px;
  }
`;

export const StyledImg = styled.img`
  width: 3vw;
  height: 3vw;
  background: ${(props) => props.theme.secondary};
  border-radius: 50%;
  @media ${devices.tablet} {
    width: 2vw;
    height: 2vw;
  }
`;
