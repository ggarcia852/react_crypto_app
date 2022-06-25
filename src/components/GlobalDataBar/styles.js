import styled from "styled-components";
import { devices } from "GlobalStyles/devices";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 5vh;
`;

export const StyledGlobalData = styled.div`
  display: flex;
  overflow-x: auto;
  &::-webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory; 
  align-items: center;
  width: 100vw;
  padding: 1% 1.5%;
  font-size: 2.5vw;
  background: ${(props) => props.theme.secondary};
  @media ${devices.tablet} {
    border-radius: 0 0 15px 15px;
    width: 70vw;
    font-size: 15px;
    justify-content: space-around;
  }
`;

export const StyledMobileDataBar = styled.div`
  display: flex;
  scroll-snap-align: start;
  scroll-behavior: smooth;
`;

export const StyledSlide = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5vh;
  width: 100%;
  background: ${(props) => props.theme.secondary};
  @media ${devices.tablet} {
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

export const StyledArrow = styled.img`
  padding-left: 0.75vw;
  padding-bottom: 0.25vw;
`;
