import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: #1F2128;
    color: #FFFFFF;
    margin: 0px;
    width: 1920;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`
