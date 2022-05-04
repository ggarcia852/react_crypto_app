import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  padding: 8%;
  height: 100%;
  background: ${(props) => props.theme.secondary};
`;

export const StyledExitImg = styled.input`
  width: 5vw;
  margin-right: 5%;
`;

export const StyledExitContainer = styled.div`
  font-size: 1.5em;
  margin-bottom: 3%;
`;

export const StyledSearchContainer = styled.div`
  color: #ffffff;
  width: 10vw;
`;

export const StyledSearchImg = styled.img`
  width: 4vw;
  margin-right: 3%;
`;

export const StyledInputContainer = styled.div`
  display: flex;
  width: 85vw;
  background: ${(props) => props.theme.navBox};
  border-radius: 12px;
  padding-left: 3%;
`;

export const StyledSearchInput = styled.input`
  background: ${(props) => props.theme.navBox};
  border: none;
  padding: 0;
  outline: 0px;
  font-size: 4.5vw;
  width: 75vw;
  height: 8vh;
  color: ${(props) => props.theme.color};
  &::-webkit-input-placeholder {
    color: ${(props) => props.theme.color};
  }
`;

export const StyledList = styled.div`
  margin-left: 8%;
  font-size: 4vw;
  position: absolute;
  overflow: scroll;
  background: ${(props) => props.theme.secondary};
  border-radius: 5px;
`;

export const StyledListItem = styled.div`
   width: 75vw;
   padding: 2% 1%;
   &:hover {
       background: #146AE3;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.color};
`;

export const StyledImg = styled.img`
  width: 5w;
  height: 5vw;
`;
