import styled from "styled-components";

export const StyledHeader = styled.span`
  display: flex;
  align-items: center;
  height: 86px;
  font-size: 22px;
  color: ${(props) => props.theme.color};
  margin-left: 93px;
`;

export const ChartsDiv = styled.div`
  display: flex;
  height: 550px;
  margin: 0px 93px 50px;
  justify-content: space-between;
`;

export const StyledCharts = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 48%;
  margin-bottom: 50px;
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
`;

export const StyledChart = styled.div`
  display: flex;
  flex-flow: column;
  width: 99%;
`;

export const StyledBarContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 80px;
  width: 800px;
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
`;

export const StyledButton = styled.button`
  display: flex;
  margin: 5px;
  padding: 15px;
  font-size: 20px;
  background: ${props => props.theme.secondary};
  border: none;
  color: ${(props) => props.theme.color};
  border-radius: 15px;
  border: none;
  background: ${({ active }) =>
    active ? "#00FC2A" : `${(props) => props.theme.secondary}`};
  &:hover {
    cursor: pointer;
  }
`;

export const StyledHeading = styled.div`
  display: flex;
  height: 130px;
  padding-left: 40px;
  padding-top: 40px;
  flex-flow: column;
`;
export const StyledTitle = styled.div`
  display: flex;
  font-size: 22px;
`;
export const StyledAmount = styled.div`
  display: flex;
  font-size: 44px;
  font-weight: bold;
`;
export const StyledDate = styled.div`
  display: flex;
  font-size: 22px;
`;

export const Loader = styled.div`
  display: flex;
  align-items: center;
`
