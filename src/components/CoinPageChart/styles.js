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

export const StyledLabel = styled.label`
  font-size: 18px;
`

export const StyledChart = styled.div`
  margin-top: 3%;
  margin-bottom: 25%;
  @media ${devices.tablet} {
    margin-bottom: 15%;
  }
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15%;
  @media ${devices.tablet} {
    padding-top: 10%;
  }
`;
