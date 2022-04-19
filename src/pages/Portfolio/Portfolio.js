import React from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import { addAsset } from "store/portfolio/actions";
import { AddCoin, CoinAsset } from "components";
import {
  AssetContainer,
  ButtonContainer,
  StyledButton,
  customModalStyles,
} from "./styles";

Modal.setAppElement("#root");

const Portfolio = (props) => {
  return (
    <>
      <ButtonContainer>
        <StyledButton onClick={() => props.addAsset(true)}>
          Add Asset
        </StyledButton>
        <Modal isOpen={props.showAddAsset} style={customModalStyles}>
          <AddCoin />
        </Modal>
      </ButtonContainer>
      <AssetContainer>
        <CoinAsset />
      </AssetContainer>
    </>
  );
};

const mapStateToProps = (state) => ({
  showAddAsset: state.portfolio.showAddAsset,
  theme: state.portfolio.darkTheme,
});

const mapDispatchToProps = {
  addAsset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
