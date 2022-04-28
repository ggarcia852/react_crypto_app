import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1vw;
  width: 20vw;
  background: ${(props) => props.theme.navBox};
  border-radius: 12px;
  border: none;
`;

export const StyledPlaceholder = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input`
  background: ${(props) => props.theme.navBox};
  border: none;
  padding: 0;
  margin-left: 5%;
  outline: 0px;
  font-size: 1vw;
  height: 1.5vw;
  color: ${(props) => props.theme.color};
  &::-webkit-input-placeholder {
    color: ${(props) => props.theme.color};
  }
`;

export const StyledList = styled.div`
  margin: 1%;
  font-size: 1vw;
  position: absolute;
  max-height: 25%;
  overflow: scroll;
  background: ${(props) => props.theme.secondary};
  border-radius: 5px;
  width: 100%;
`;

export const StyledListItem = styled.div`
max-width: 20%;
padding: 1%;
&:hover {
  background: #146AE3;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.color};
`;

export const StyledImg = styled.img`
  width: 1vw;
  height: 1vw;
`;
