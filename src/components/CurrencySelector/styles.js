import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 63px;
  background: ${(props) => props.theme.navBox};
  border-radius: 10px;
  padding: 1%;
`;

export const StyledDropdown = styled.select`
  display: flex;
  border: none;
  outline: 0px;
  background: ${(props) => props.theme.navBox};
  color: ${(props) => props.theme.color};
  font-size: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledImgBackground = styled.div`
  background: ${(props) => props.theme.secondary};
  width: 33px;
  height: 35px;
  border-radius: 20px;
  margin: 10px;
`;

export const StyledImg = styled.img`
  width: 33px;
`;
