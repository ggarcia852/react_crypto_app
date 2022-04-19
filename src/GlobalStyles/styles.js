import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.main};
    color: ${(props) => props.theme.color};
    margin: 0px;
    width: 1920;
    font-family: Poppins
  }
`;

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`;

export const darkTheme = {
  main: "#1F2128",
  secondary: "#191B1F",
  color: "#FFFFFF",
  navBox: "#2C2F36",
  modal: "dark",
};

export const lightTheme = {
  main: "#FCFCFC",
  secondary: "#FFFFFF",
  color: "#2C2F36",
  navBox: "#FFFFFF",
  modal: "light",
};
