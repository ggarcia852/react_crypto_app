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
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const AssetContainer = styled.div`
  margin-left 111px;
`;

export const customModalStyles = {
  content: {
    background: "#2C2F36",
    borderRadius: "10px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
