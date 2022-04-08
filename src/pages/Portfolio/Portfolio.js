import { AddCoin, CoinAsset } from "components";
import React from "react";
import {
  AssetContainer,
  ButtonContainer,
  Heading,
  StyledButton,
} from "./styles";

export default function Portfolio(props) {
  return (
    <>
    <div>
      <AddCoin />
    </div>
      <ButtonContainer>
        <StyledButton>Add Asset</StyledButton>
      </ButtonContainer>
      <AssetContainer>
        <Heading>Your Statistics</Heading>
        <CoinAsset />
      </AssetContainer>
    </>
  );
}
