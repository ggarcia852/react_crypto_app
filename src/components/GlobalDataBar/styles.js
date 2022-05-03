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
  height: 55px;
  width: 50%;
  background: ${(props) => props.theme.secondary};
`;

export const StyledGlobalData = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 1.5%;
  font-size: 2.5vw;
  background: ${(props) => props.theme.secondary};
  @media ${devices.tablet} {
    border-radius: 0 0 15px 15px;
    font-size: 1vw;
    width: 60vw;
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
