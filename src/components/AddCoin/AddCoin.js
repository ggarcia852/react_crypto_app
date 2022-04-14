import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { searchCoins, addAsset, getCoinStats } from "store/portfolio/actions";
import {
  ButtonContainer,
  CloseButton,
  CoinContainer,
  Container,
  Direction,
  DirectionsContainer,
  Heading,
  ImgContainer,
  Input,
  InputContainer,
  StyledListItem,
  SaveButton,
  SelectedCoinContainer,
  StyledImg,
  StyledList,
} from "./styles";

function AddCoin(props) {
  const [value, setValue] = useState("");
  const [coin, setCoin] = useState(null);
  const [purchaseAmount, setPurchaseAmount] = useState();
  const [date, setDate] = useState("");

  useEffect(() => {
    if (value !== "") {
      props.searchCoins(value);
    }
    // eslint-disable-next-line
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = (coin) => {
    setCoin(coin);
    setValue("");
  };

  const handleAmountChange = (e) => {
    setPurchaseAmount(e.target.value);
  };
  const handleDateChange = (e) => {
    const year = e.target.value.slice(0, 4);
    const month = e.target.value.slice(5, 7);
    const day = e.target.value.slice(-2);
    const newDate = `${day}-${month}-${year}`;
    setDate(newDate);
  };

  const saveAsset = (coin) => {
    setCoin((coin.purchaseAmount = purchaseAmount), (coin.date = date));
    props.getCoinStats(coin, date);
    props.addAsset(false);
  };

  const hasValue = value !== "";
  const hasCoins = !props.isLoading && props.coins && hasValue;
  const noCoins = hasCoins && props.coins?.length === 0;
  const selectedCoin = coin;
  const noCoinSelected = !coin;

  return (
    <Container>
      <div>
        <Heading>Enter Coin Details</Heading>
      </div>
      <CoinContainer>
        <div>
          {noCoinSelected && (
            <DirectionsContainer>
              <Direction>1.) Search and select your coin </Direction>
              <Direction>2.) Enter purchase amount</Direction>
              <Direction>3.) Select your purchase date</Direction>
            </DirectionsContainer>
          )}
          {selectedCoin && (
            <SelectedCoinContainer>
              <ImgContainer>
                <StyledImg src={coin.thumb} alt="coin" />
              </ImgContainer>
              <div>
                {coin.name} ({coin.symbol})
              </div>
            </SelectedCoinContainer>
          )}
        </div>
        <InputContainer>
          <div>
            <Input
              type="text"
              value={value}
              placeholder="Search Coins"
              onChange={handleChange}
            />
            <StyledList>
              {props.isLoading && hasValue && <div>Loading coins...</div>}
              {noCoins && <div>No coins found.</div>}
              {hasCoins &&
                props.coins.map((coin) => (
                  <StyledListItem
                    onClick={() => handleClick(coin)}
                    key={coin.id}
                  >
                    <img src={coin.thumb} alt="coin" /> {coin.name} (
                    {coin.symbol})
                  </StyledListItem>
                ))}
            </StyledList>
          </div>
          <div>
            <Input
              type="number"
              min=".01"
              onChange={handleAmountChange}
              placeholder="Purchase Amount"
            />
          </div>
          <div>
            <Input
              type="date"
              id="date"
              onChange={handleDateChange}
              placeholder="Purchase Date"
            />
          </div>
        </InputContainer>
      </CoinContainer>
      <div>
        <ButtonContainer>
          <CloseButton onClick={() => props.addAsset(false)}>Close</CloseButton>
          <SaveButton onClick={() => saveAsset(coin)}>Save Coin</SaveButton>
        </ButtonContainer>
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  showAddAsset: state.portfolio.showAddAsset,
  isLoading: state.portfolio.isLoading,
  hasError: state.portfolio.hasError,
  coins: state.portfolio.searchCoins,
  theme: state.theme.darkTheme,
});

const mapDispatchToProps = {
  searchCoins,
  addAsset,
  getCoinStats,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCoin);
