import styled from "styled-components";
import { devices } from "GlobalStyles/devices";

export const StyledDayContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 3vw;
  @media ${devices.tablet} {
    font -size: 1.5vw;
  }
`;

export const StyledButtonInput = styled.input`
  margin-left: 3vw;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledChart = styled.div`
  margin-top: 3%;
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10%;
`