import styled from "styled-components";

export const StyledHeader = styled.span`
  font-size: 1.75vw;
  font-weight: 500;
  color: ${(props) => props.theme.color};
  margin: 2% 8%;
`;

export const StyledChartHeading = styled.div`
  padding: 5%;
`;

export const StyledTitle = styled.div`
  font-size: 1.75vw;
`;

export const StyledAmount = styled.div`
  font-size: 2.5vw;
  font-weight: 600;
`;

export const StyledDate = styled.div`
  font-size: 1.5vw;
`;

export const ChartsWrapper = styled.div`
  display: flex;
  margin: 0 8%;
  gap: 5%;
`;

export const ChartContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme.secondary};
  border-radius: 3%;
`;

export const StyledChartContent = styled.div`
  width: 100%;
  padding-top: 56.25%;
  position: relative;
`;

export const StyledChart = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
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
  width: 50%;
`;

export const StyledButton = styled.button`
  margin: 1%;
  padding: 2%;
  font-size: 1.5vw;
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
  align-items: center;
  justify-content: center;
  width: 100%;
`;
