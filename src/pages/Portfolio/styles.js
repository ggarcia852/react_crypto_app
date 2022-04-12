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
`;

export const Heading = styled.div`
  font-size: 22px;
  margin-bottom: 50px;
`;

export const AssetContainer = styled.div`
  margin-left 111px;
`;
