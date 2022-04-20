import styled from "styled-components";

export const ButtonContainer = styled.div`
  padding: 75px 0px 35px;
  text-align: center;
`;

export const StyledButton = styled.button`
  width: 30%;
  height: 75px;
  background: #06d554;
  color: ${(props) => props.theme.color};
  border: none;
  border-radius: 7px;
  font-size: 20px;
  font-weight: 600;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

export const AssetContainer = styled.div`
  margin: 0px 100px;
`;

export const NoAssetsContainer = styled.div`
  text-align: center;
  font-size: 17px;
`;

export const customModalStyles = {
  content: {
    background: "none",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
