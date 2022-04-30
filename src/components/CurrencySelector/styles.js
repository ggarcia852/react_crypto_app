import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 2.75%;
  background: ${(props) => props.theme.navBox};
  border-radius: 12px;
`;

export const StyledDropdown = styled.select`
  display: flex;
  border: none;
  outline: 0px;
  background: ${(props) => props.theme.navBox};
  color: ${(props) => props.theme.color};
  font-size: 1vw;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledImg = styled.img`
  width: 1.75vw;
  height: 1.75vw;
  background: ${(props) => props.theme.secondary};
  border-radius: 50%;
`;
