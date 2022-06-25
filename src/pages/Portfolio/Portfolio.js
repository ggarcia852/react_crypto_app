import React from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import Media from "react-media";
import { addAsset } from "store/portfolio/actions";
import { AddCoin, CoinAsset } from "components";
import {
  AssetContainer,
  ButtonContainer,
  StyledButton,
  customModalStylesMobile,
  customModalStyles,
  NoAssetsContainer,
} from "./styles";

Modal.setAppElement("#root");

const Portfolio = (props) => {
  return (
    <>
      <ButtonContainer>
        <StyledButton onClick={() => props.addAsset(true)}>
          Add Asset
        </StyledButton>
        <Media queries={{ small: { maxWidth: 599 } }}>
          {(matches) =>
            matches.small ? (
              <Modal
                isOpen={props.showAddAsset}
                style={customModalStylesMobile}
              >
                <AddCoin />
              </Modal>
            ) : (
              <Modal isOpen={props.showAddAsset} style={customModalStyles}>
                <AddCoin />
              </Modal>
            )
          }
        </Media>
      </ButtonContainer>
      {props.assets.length === 0 && (
        <NoAssetsContainer>
          *Add assets to start building your Portfolio
        </NoAssetsContainer>
      )}
      <AssetContainer>
        <CoinAsset />
      </AssetContainer>
    </>
  );
};

const mapStateToProps = (state) => ({
  showAddAsset: state.portfolio.showAddAsset,
  theme: state.portfolio.darkTheme,
  assets: state.portfolio.assets,
});

const mapDispatchToProps = {
  addAsset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
