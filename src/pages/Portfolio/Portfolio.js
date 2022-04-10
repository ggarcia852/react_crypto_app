import React from "react";
import { connect } from "react-redux";
import { addAsset } from "store/portfolio/actions";
import { AddCoin, CoinAsset } from "components";
import {
  AssetContainer,
  ButtonContainer,
  Heading,
  StyledButton,
} from "./styles";

const Portfolio = (props) => {
  return (
    <>
      <ButtonContainer>
        <StyledButton onClick={() => props.addAsset(true)}>
          Add Asset
        </StyledButton>
        {props.showAddAsset && (
          <div>
            <AddCoin />
          </div>
        )}
      </ButtonContainer>
      <AssetContainer>
        <Heading>Your Statistics</Heading>
        <CoinAsset />
      </AssetContainer>
    </>
  );
};

const mapStateToProps = (state) => ({
  showAddAsset: state.portfolio.showAddAsset,
});

const mapDispatchToProps = {
  addAsset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
