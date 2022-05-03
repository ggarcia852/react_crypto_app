import styled from "styled-components";
import { devices } from "GlobalStyles/devices";

export const StyledHeader = styled.span`
  display: flex;
  align-items: center;
  font-size: 3.5vw;
  font-weight: 500;
  color: ${(props) => props.theme.color};
  margin: 3% 8%;
  @media ${devices.tablet} {
    font-size: 2vw;
  }
`;

export const ChartsContainer = styled.div`
  display: flex;
  margin: 0 8%;
  @media ${devices.mobileL} {
    justify-content: space-between;
  }
`;

export const StyledCharts = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5%;
  background: ${(props) => props.theme.secondary};
  border-radius: 3%;
  @media ${devices.mobileL} {
    width: 48%;
  }
`;

export const StyledChart = styled.div`
  width: 85vw;
  @media ${devices.mobileL} {
    width: 100%;
`;

export const StyledBarContainer = styled.div`
  display: flex;
  justify-content: center;
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
    font-size: 1.5vw;
  }
`;

export const StyledHeading = styled.div`
  display: flex;
  flex-flow: column;
  padding: 5%;
`;

export const StyledTitle = styled.div`
  font-size: 3vw;
  @media ${devices.tablet} {
    font-size: 2vw;
  }
`;

export const StyledAmount = styled.div`
  font-size: 4vw;
  font-weight: 600;
  @media ${devices.tablet} {
    font-size: 3vw;
  }
`;

export const StyledDate = styled.div`
  font-size: 3vw;
  @media ${devices.tablet} {
    font-size: 2vw;
  }
`;

export const Loader = styled.div`
  display: flex;
  align-items: center;
`;
