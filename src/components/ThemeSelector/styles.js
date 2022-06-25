import styled from "styled-components";
import { devices } from "GlobalStyles/devices";

export const StyledThemeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5vh;
  width: 5vh;
  padding: 0 3%;
  background: ${(props) => props.theme.navBox};
  border-radius: 12%;
  border: none;
  &:hover {
    cursor: pointer;
  }
  @media ${devices.tablet} {
    height: 60%;
    border-radius: 8px;
    width: 4vw;
  }
`;

export const StyledImg = styled.img`
  width: 4vw;
  height: 4vw;
  @media ${devices.tablet} {
    width: 2vw;
    height: 2vw;
  }
`;
