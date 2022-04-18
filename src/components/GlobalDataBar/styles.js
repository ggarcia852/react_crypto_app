import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  width: 906px;
  background: ${(props) => props.theme.secondary};
`;

export const StyledGlobalData = styled.div`
  display: flex;
  height: 55px;
  width: 906px;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.secondary};
  margin-top: 0px;
  border-radius: 0px 0px 15px 15px;
  padding: 0px 50px 0px 50px;
`;

export const StyledData = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledIcon = styled.span`
  padding-right: 7px;
`;
export const StyledBar = styled.span`
  padding-left: 7px;
`;

export const StyledArrow = styled.img`
  padding-left: 15px;
  padding-bottom: 3px;
`;
