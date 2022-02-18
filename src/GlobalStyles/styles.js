import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap'); 
  body {
    background: #1F2128;
    color: #FFFFFF;
    margin: 0px;
    width: 1920;
    font-family: Poppins
  }
`;

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`
