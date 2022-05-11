import styled from "styled-components";
import { devices } from "GlobalStyles/devices";

export const StyledFullBar = styled.div.attrs((props) => ({
  style: {
    background: `${props.mainBackground}`,
  },
}))`
  min-width: 5vw;
  margin-left: 0.25vw;
  border-radius: 20px;
`;

export const StyledProgress = styled.div.attrs((props) => ({
  progress: `${props.progress}%`,
  style: {
    background: `${props.background}`,
  },
}))`
  height: 1.5vw;
  border-radius: 20px;
  width: ${(props) => props.progress};
  @media ${devices.tablet} {
    height: 0.75vw;
  }
`;
