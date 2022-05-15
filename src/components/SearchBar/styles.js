import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 60%;
  width: 17vw;
  background: ${(props) => props.theme.navBox};
  border-radius: 8px;
  border: none;
`;

export const StyledPlaceholder = styled.div`
  margin-left: 5%;
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input`
  background: ${(props) => props.theme.navBox};
  border: none;
  margin-left: 5%;
  outline: 0px;
  font-size: 1.25vw;
  border-radius: 8px;
  height: 100%;
  width: 15vw;
  color: ${(props) => props.theme.color};
  &::-webkit-input-placeholder {
    color: ${(props) => props.theme.color};
  }
`;

export const StyledList = styled.div`
  margin: 1%;
  font-size: 1vw;
  position: absolute;
  max-height: 20%;
  overflow: scroll;
  background: ${(props) => props.theme.secondary};
  border-radius: 5px;
`;

export const StyledListItem = styled.div`
max-width: 15vw;
padding: .5%;
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
