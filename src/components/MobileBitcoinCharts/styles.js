import styled from "styled-components";
import { devices } from "GlobalStyles/devices";

export const StyledHeader = styled.span`
  display: flex;
  align-items: center;
  font-size: 3.5vw;
  font-weight: 500;
  color: ${(props) => props.theme.color};
  margin: 2% 8%;
  @media ${devices.tablet} {
    font-size: 1.75vw;
  }
`;

export const StyledChartHeading = styled.div`
  display: flex;
  flex-flow: column;
  padding: 5%;
`;

export const StyledHeaderBox = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledArrows = styled.div`
  font-size: 5vw;
  font-weight: 500;
`;

export const ChartsWrapper = styled.div`
  display: flex;
  margin: 0 8%;
  width: 84vw;
  overflow-x: auto;
  &::-webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory; 
  @media ${devices.tablet} {
    gap: 5%;
  }
`;

export const ChartContainer = styled.div`
  // display: flex;
  // margin-bottom: 5%;
  // min-height: 33vh;
  width: 100%;
  scroll-snap-align: start;
  scroll-behavior: smooth;
  background: ${(props) => props.theme.secondary};
  border-radius: 3%;
  @media ${devices.tablet} {
    // width: 50%;
    // position: relative;
    // padding-top: 16%;
  }
`;

export const ChartContainerDos = styled.div`
  width: 100%;
  padding-top: 56.25%;
  position: relative;
`;

export const StyledChart = styled.div`
  display: flex;
  // justify-content: center;
  // flex-direction: column;
  // justify-content: space-between;
  position: absolute;
  top: 0;
  // left: 0;
  width: 100%;
  height: 100%;
  // background: green;
  @media ${devices.tablet} {
    // width: 39vw;
    // position:  absolute;
    // top: 0;
    // left: 0;
    // bottom: 0;
    // right: 0;
  }
`;

export const StyledBarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3%;
`;

export const StyledBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
  margin: 0 8%;
  @media ${devices.laptop} {
    width: 50%;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  margin: 1%;
  padding: 1.5%;
  font-size: 2vw;
  background: ${(props) => props.theme.secondary};
  border: none;
  color: ${(props) => props.theme.color};
  border-radius: 15%;
  background: ${({ active }) =>
    active ? "#00FC2A" : `${(props) => props.theme.secondary}`};
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  @media ${devices.tablet} {
    padding: 1.5%;
    font-size: 1.25vw;
  }
`;

export const StyledTitle = styled.div`
  font-size: 3vw;
  @media ${devices.tablet} {
    font-size: 1.75vw;
  }
`;

export const StyledAmount = styled.div`
  font-size: 4vw;
  font-weight: 600;
  @media ${devices.tablet} {
    font-size: 2.5vw;
  }
`;

export const StyledDate = styled.div`
  font-size: 3vw;
  @media ${devices.tablet} {
    font-size: 1.5vw;
  }
`;

export const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 84vw;
`;
