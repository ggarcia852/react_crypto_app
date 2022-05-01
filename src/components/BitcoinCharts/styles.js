import styled from "styled-components";
import { devices } from "GlobalStyles/devices";

export const StyledHeader = styled.span`
  display: flex;
  align-items: center;
  font-size: 2vw;
  font-weight: 500;
  color: ${(props) => props.theme.color};
  margin: 3% 8%;
`;

export const ChartsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 8%;
`;

export const StyledCharts = styled.div`
  display: flex;
  justify-content: center;
  width: 48%;
  margin-bottom: 5%;
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
`;

export const StyledChart = styled.div`
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
  width: 90%;
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
  margin: 0 5%;
  @media ${devices.laptop} {
    width: 50%;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  margin: 10px;
  padding: 10px;
  font-size: 1.5vw;
  background: ${(props) => props.theme.secondary};
  border: none;
  color: ${(props) => props.theme.color};
  border-radius: 10px;
  background: ${({ active }) =>
    active ? "#00FC2A" : `${(props) => props.theme.secondary}`};
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const StyledHeading = styled.div`
  display: flex;
  flex-flow: column;
  padding: 5%;
`;

export const StyledTitle = styled.div`
  font-size: 2vw;
`;

export const StyledAmount = styled.div`
  font-size: 3vw;
  font-weight: 600;
`;

export const StyledDate = styled.div`
  font-size: 2vw;
`;

export const Loader = styled.div`
  display: flex;
  align-items: center;
`;
