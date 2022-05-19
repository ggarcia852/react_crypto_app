import styled from "styled-components";
import { devices } from "GlobalStyles/devices";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  background: ${(props) => props.theme.navBox};
  border-radius: 10px;
  padding: 5%;
  border: 1px solid #707070;
  @media ${devices.tablet} {
    height: 50%;
    align-items: center;
  }
`;

export const Heading = styled.div`
  text-align: center;
  margin: 3%;
  font-size: 3vw;
  @media ${devices.tablet} {
    font-size: 2vw;
  }
`;

export const FormContainer = styled.div`
  text-align: center;
  @media ${devices.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75vw;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const DirectionsContainer = styled.div`
  display: flex;
  flex-flow: column;
  height: 30vw;
  width: 80vw;
  justify-content: space-around;
  text-align: center;
  margin: 3%;
  padding: 1vw;
  border-radius: 10px;
  font-size: 3vw;
  background: ${(props) => props.theme.secondary};
  border: 1px solid #707070;
  @media ${devices.tablet} {
    margin: 0;
    font-size: 1.55vw;
    width: 25vw;
    height: 20vw;
  }
`;

export const SelectedCoinContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 10%;
  width: 80vw;
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
  @media ${devices.tablet} {
    width: 25vw;
    height: 17vw;
    margin: 0;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  padding: 20%;
  border-radius: 10px;
  background: ${(props) => props.theme.main};
`;

export const StyledImg = styled.img`
  width: 8vw;
  @media ${devices.tablet} {
    width: 4vw;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: column;
  @media ${devices.tablet} {
    height: 22vw;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 9vw;
  margin: 3% 0;
  color-scheme: ${(props) => props.theme.modal};
  background: ${(props) => props.theme.secondary};
  &::-webkit-input-placeholder {
    color: ${(props) => props.theme.color};
  }
  border: 1px solid #707070;
  border-radius: 10px;
  &::-webkit-inner-spin-button {
    opacity: 1;
  }
  @media ${devices.tablet} {
    width: 30vw;
    height: 6vw;
    margin: 0 0 0 3%;
  }
`;

export const StyledList = styled.div`
  position: absolute;
  max-height: 45vh;
  width: 70vw;
  overflow: scroll;
  background: ${(props) => props.theme.secondary};
  border-radius: 5px;
  margin-top: 14%;
  text-align: justify;
  @media ${devices.tablet} {
    margin-top: 8.5%;
    margin-left: 1%;
    max-height: 25vh;
    width: 31vw;
  }
`;

export const StyledListItem = styled.div`
padding: 2% 4%;
&:hover {
  background: #2550EA;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column-reverse;
  margin-top: 10%;
  @media ${devices.tablet} {
    flex-flow: row;
    justify-content: center;
    margin-top: 3%;
  }
`;

export const CloseButton = styled.button`
    width: 100%;
    height: 10vw;
    background:  #FFFFFF;
    color:   color: ${(props) => props.theme.color};
    margin: 3%;
    border: none;
    border: 1px solid #06d554;
    border-radius: 10px;
    &:hover{
        opacity: .9;
        cursor: pointer;
    }
    @media ${devices.tablet} {
      width: 25vw;
      height: 5vw;
    }
`;

export const SaveButton = styled.button`
  width: 100%;
  height: 10vw;
  color: ${(props) => props.theme.color};
  background: #06d554;
  border: none;
  border-radius: 10px;
  margin: 3%;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
  @media ${devices.tablet} {
    width: 25vw;
    height: 5vw;
  }
`;

export const Error = styled.div`
  color: #fe1040;
  font-size: 3vw;
  text-align: justify;
  @media ${devices.tablet} {
    font-size: 1.5vw;
  }
`;
