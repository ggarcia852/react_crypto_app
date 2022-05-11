import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.main};
    color: ${(props) => props.theme.color};
    font-family: Poppins;
    margin: 0px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
