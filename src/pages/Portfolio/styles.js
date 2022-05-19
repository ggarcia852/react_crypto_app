import styled from "styled-components";
import { devices } from "GlobalStyles/devices";

export const ButtonContainer = styled.div`
  padding: 3%;
  text-align: center;
`;

export const StyledButton = styled.button`
  width: 85vw;
  height: 15vw;
  background: #06d554;
  color: ${(props) => props.theme.color};
  border: none;
  border-radius: 7px;
  font-size: 4vw;
  font-weight: 600;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
  @media ${devices.tablet} {
    width: 25vw;
    height: 6vw;
    font-size: 1.5vw;
  }
`;

export const AssetContainer = styled.div`
  margin: 0 8%;
`;

export const NoAssetsContainer = styled.div`
  text-align: center;
  font-size: 3vw;
`;

export const customModalStyles = {
  content: {
    background: "white",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
