import styled from "styled-components";
import { devices } from "GlobalStyles/devices";

export const ButtonContainer = styled.div`
  padding: 3%;
  text-align: center;
`;

export const StyledButton = styled.button`
  width: 80%;
  height: 50px;
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
    width: 250px;
    height: 60px;
    font-size: 18px;
  }
`;

export const AssetContainer = styled.div`
  margin: 0 8%;
`;

export const NoAssetsContainer = styled.div`
  text-align: center;
  font-size: 17px;
`;

export const customModalStylesMobile = {
  content: {
    background: "",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    height: "80%",
    overflow: "hidden",
  },
};

export const customModalStyles = {
  content: {
    background: "",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "550px",
    height: "350px",
    overflow: "hidden",
  },
};
