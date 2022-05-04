import styled from "styled-components";
import { devices } from "GlobalStyles/devices";

export const StyledDayContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3%;
`;

export const StyledButtonInput = styled.input`
  margin-left: 3vw;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledChart = styled.div`
  margin-top: 3%;
  margin-bottom: 8vh;
  min-height: 34vh;
  @media ${devices.tablet} {
    margin-bottom: 0;
  }
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 25%;
  @media ${devices.tablet} {
  padding-top: 10%;
  }
`