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
  font-size: 1vw;
  background: ${(props) => props.theme.secondary};
  border-radius: 0px 0px 15px 15px;
  @media ${devices.laptop} {
    width: 70%;
  }
  @media ${devices.desktop} {
    width: 60%;
    padding: 1%;
  }
`;

export const StyledData = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledIcon = styled.span`
  padding-right: 5px;
`;

export const StyledBar = styled.span`
  padding-left: 5px;
`;

export const StyledArrow = styled.img`
  padding-left: 5px;
  padding-bottom: 3px;
`;
