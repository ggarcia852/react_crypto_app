import styled from "styled-components";
import { devices } from "GlobalStyles/devices";

export const StyledHeader = styled.span`
  font-size: 3.5vw;
  font-weight: 500;
  color: ${(props) => props.theme.color};
  margin: 3% 8%;
`;

export const ChartsWrapper = styled.div`
  display: flex;
  margin: 0 8%;
  width: 84vw;
  overflow-x: auto;
  &::-webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory; 
`;

export const ChartContainer = styled.div`
  display: flex;
  scroll-snap-align: start;
  scroll-behavior: smooth;
  background: ${(props) => props.theme.secondary};
  border-radius: 3%;
  height: 40vh;
  width: 100%;
  @media ${devices.mobileM} {
    height: 45vh;
  }
  @media ${devices.mobileL} {
    height: 55vh;
  }
`;

export const StyledHeading = styled.div`
  padding: 5%;
`;

export const StyledHeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledTitle = styled.div`
  font-size: 3vw;
`;

export const StyledAmount = styled.div`
  font-size: 4vw;
  font-weight: 600;
`;

export const StyledDate = styled.div`
  font-size: 2.5vw;
`;

export const StyledArrows = styled.div`
  font-size: 5vw;
  font-weight: 500;
  margin-right: 10%;
`;

export const StyledChart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 84vw;
`;

export const StyledBarContainer = styled.div`
  display: flex;
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
`;

export const StyledButton = styled.button`
  padding: 2.25%;
  font-size: 2.5vw;
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
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  width: 84vw;
  margin-bottom: 20%;
`;
