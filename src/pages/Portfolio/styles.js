import styled from "styled-components";

export const ButtonContainer = styled.div`
  padding: 3%;
  text-align: center;
`;

export const StyledButton = styled.button`
  width: 12vw;
  height: 4vw;
  background: #06d554;
  color: ${(props) => props.theme.color};
  border: none;
  border-radius: 7px;
  font-size: 1.5vw;
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
  font-size: 1vw;
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
