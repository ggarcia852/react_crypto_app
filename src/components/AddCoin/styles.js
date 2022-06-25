import styled from "styled-components";
import { devices } from "GlobalStyles/devices";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  background: ${(props) => props.theme.navBox};
  border-radius: 10px;
  padding: 0 5%;
  border: 1px solid #707070;
  @media ${devices.tablet} {
    padding: 2%;
  }
`;

export const Heading = styled.div`
  text-align: center;
  margin: 4%;
  font-size: 18px;
  @media ${devices.tablet} {
    font-size: 18px;
  }
`;

export const FormContainer = styled.div`
  text-align: center;
  @media ${devices.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const DirectionsContainer = styled.div`
  display: flex;
  flex-flow: column;
  height: 150px;
  width: 175px;
  justify-content: space-around;
  text-align: center;
  margin-bottom: 3%;
  padding: 1vw;
  border-radius: 10px;
  font-size: 11px;
  background: ${(props) => props.theme.secondary};
  border: 1px solid #707070;
  @media ${devices.tablet} {
    margin: 0;
    padding: 0 5%;
    font-size: 12px;
    width: 150px;
    height: 200px;
  }
`;

export const SelectedCoinContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 3%;
  height: 150px;
  width: 175px;
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
  @media ${devices.tablet} {
    width: 150px;
    height: 200px;
    margin: 0;
    padding: 0;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  padding: 15%;
  border-radius: 10px;
  margin-bottom: 3%;
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
  height: 150px;
  @media ${devices.tablet} {
    height: 200px;
  }
`;

export const Input = styled.input`
  font-size: 13px;
  padding-left: 10px;
  width: 95%;
  height: 40px;
  color-scheme: ${(props) => props.theme.modal};
  background: ${(props) => props.theme.secondary};
  &::-webkit-input-placeholder {
    color: ${(props) => props.theme.color};
  }
  border: 1px solid #707070;
  border-radius: 10px;
  &::-webkit-inner-spin-button {
    opacity: 1;
    height: 30px;
    margin-right: 8px;
  }
  &::-webkit-calendar-picker-indicator {
    height: 20px;
    width: 20px;
    margin-right: 5px;
  }
  @media ${devices.tablet} {
    width: 300px;
    height: 50px;
    margin-left: 3%;
  }
`;

export const StyledList = styled.div`
  position: absolute;
  max-height: 45vh;
  width: 75%;
  overflow: scroll;
  background: ${(props) => props.theme.secondary};
  border-radius: 5px;
  margin-top: 10%;
  margin-left: 1%;
  text-align: justify;
  @media ${devices.tablet} {
    margin-top: 8.5%;
    margin-left: 2%;
    max-height: 250px;
    width: 300px;
    font-size: 13px;
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
  margin-top: 5%;
  @media ${devices.tablet} {
    flex-flow: row;
    justify-content: center;
    margin-top: 3%;
  }
`;

export const CloseButton = styled.button`
    font-size: 15px;
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
      width: 175px;
      height: 40px;
      font-size: 15px;
    }
`;

export const SaveButton = styled.button`
  font-size: 15px;
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
    width: 175px;
    height: 40px;
    font-size: 15px;
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
