import styled from "styled-components";
import { devices } from "GlobalStyles/devices";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7vh;
  width: 100%;
  background: ${(props) => props.theme.secondary};
  @media ${devices.tablet} {
    width: 60vw;
  }
`;

export const StyledGlobalData = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 5vh;
  padding: 1.5%;
  font-size: 2.5vw;
  background: ${(props) => props.theme.secondary};
  @media ${devices.tablet} {
    border-radius: 0 0 15px 15px;
    width: 60vw;
    font-size: 1.25vw;
  }
`;

export const StyledData = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledMobileData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledIcon = styled.span`
  padding-right: 0.75vw;
`;

export const StyledBar = styled.span`
  // margin-right: 4%;
`;

export const StyledArrow = styled.img`
  padding-left: 0.75vw;
  padding-bottom: 0.25vw;
`;
