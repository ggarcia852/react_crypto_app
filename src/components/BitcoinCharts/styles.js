import styled from "styled-components";

export const StyledHeader = styled.span`
  display: flex;
  align-items: center;
  height: 86px;
  font-size: 22px;
  color: #ffffff;
  margin-left: 93px;
`;

export const ChartsDiv = styled.div`
  display: flex;
  min-height: 449px;
  margin-left: 93px;
  margin-right: 93px;
  justify-content: space-between;
`;

export const StyledCharts = styled.div`
  display: flex;
  width: 48%;
  margin-bottom: 50px;
  background: #191b1f;
  border-radius: 10px;
`;

export const StyledChart = styled.div`
  display: flex;
  flex-flow: column;
  width: 99%;
`;

export const StyledContainer = styled.div`
  display: flex;
  height: 80px;
  justify-content: center;
`;

export const StyledBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 800px;
  background: #191b1f;
  border-radius: 10px;
`;

export const StyledButton = styled.button`
  display: flex;
  margin: 5px;
  padding: 15px;
  font-size: 20px;
  background: #191b1f;
  border: none;
  color: #ffffff;
  border-radius: 15px;
  border: none;
  background: ${({ active }) => (active ? "#00FC2A" : "#191b1f")};
  &:hover {
    cursor: pointer;
  }
`;

export const StyledHeading = styled.div`
  display:flex;
  height: 130px;
  padding-left: 40px;
  padding-top: 40px;
  flex-flow: column;
`
export const StyledTitle = styled.div`
  display:flex;
  font-size: 22px;
`
export const StyledAmount = styled.div`
  display:flex;
  font-size: 44px;
  font-weight: bold;
`
export const StyledDate = styled.div`
  display:flex;
  font-size: 22px;
`