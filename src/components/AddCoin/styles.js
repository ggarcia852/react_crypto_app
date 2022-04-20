import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  background: ${(props) => props.theme.navBox};
  border-radius: 10px;
  padding: 15px;
  border: 1px solid #707070;
`;

export const CoinContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const DirectionsContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  text-align: center;
  margin: 15px;
  padding: 10px 0px;
  border-radius: 10px;
  font-size: 15px;
  height: 235px;
  width: 205px;
  background: ${(props) => props.theme.secondary};
  border: 1px solid #707070;
`;

export const Direction = styled.div`
  padding: 15px;
`;

export const Heading = styled.div`
  text-align: center;
  margin: 20px 0px 35px;
  font-size: 28px;
`;

export const SelectedCoinContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-right: 30px;
  justify-content: center;
  height: 235px;
  width: 205px;
  margin: 15px;
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85px;
  width: 85px;
  border-radius: 10px;
  background: ${(props) => props.theme.main};
`;

export const StyledImg = styled.img`
  width: 35px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  margin: 15px;
`;

export const Input = styled.input`
  width: 400px;
  height: 65px;
  color-scheme: ${(props) => props.theme.modal};
  background: ${(props) => props.theme.secondary};
  &::-webkit-input-placeholder {
    color: ${(props) => props.theme.color};
  }
  border: 1px solid #707070;
  border-radius: 10px;
  padding: 0px 15px;
  &::-webkit-inner-spin-button {
    opacity: 1;
  }
`;

export const StyledList = styled.div`
  position: absolute;
  max-height: 175px;
  min-width: 200px;
  overflow: scroll;
  background: ${(props) => props.theme.secondary};
  border-radius: 5px;
  margin-top: 64px;
`;

export const StyledListItem = styled.div`
padding: 0px 15px;
&:hover {
  background: #2550EA;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CloseButton = styled.button`
    width: 230px;
    height: 50px;
    background:  #FFFFFF;
    color:   color: ${(props) => props.theme.color};
    margin: 5px;
    border: none;
    border: 1px solid #06d554;
    border-radius: 10px;
    &:hover{
        opacity: .9;
        cursor: pointer;
    }
`;

export const SaveButton = styled.button`
  width: 230px;
  height: 50px;
  color: ${(props) => props.theme.color};
  background: #06d554;
  border: none;
  border-radius: 10px;
  margin: 5px;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

export const Error = styled.div`
  color: #fe1040;
  font-size: 15px;
`;

export const Loading = styled.div`
  padding-left: 20px;
`;
