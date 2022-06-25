import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { searchCoins, addAsset, getCoinStats } from "store/portfolio/actions";
import {
  ButtonContainer,
  CloseButton,
  FormContainer,
  Container,
  DirectionsContainer,
  Heading,
  ImgContainer,
  Input,
  InputContainer,
  LeftContainer,
  StyledListItem,
  SaveButton,
  SelectedCoinContainer,
  StyledImg,
  StyledList,
  Error,
} from "./styles";

function AddCoin(props) {
  const [value, setValue] = useState("");
  const [coin, setCoin] = useState(null);
  const [purchaseAmount, setPurchaseAmount] = useState(0);
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState({
    coin: "",
    purchaseAmount: "",
    date: "",
  });

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
    setErrors({ coin: "" });
    setCoin(coin);
    setValue("");
  };

  const handleAmountChange = (e) => {
    setPurchaseAmount(e.target.value);
    setErrors({
      purchaseAmount: "",
    });
  };

  const handleDateChange = (e) => {
    const year = e.target.value.slice(0, 4);
    const month = e.target.value.slice(5, 7);
    const day = e.target.value.slice(-2);
    const newDate = `${day}-${month}-${year}`;
    setDate(newDate);
    setErrors({ date: "" });
  };

  const saveAsset = (coin) => {
    if (coin === null) {
      setErrors({
        coin: "Select a coin.",
      });
      return;
    }
    if (purchaseAmount <= 0) {
      setErrors({
        purchaseAmount: "Enter a valid purchase amount.",
      });
      return;
    }
    if (date === "") {
      setErrors({
        date: "Select a date.",
      });
      return;
    }
    setCoin((coin.purchaseAmount = purchaseAmount), (coin.date = date));
    props.getCoinStats(coin, date);
    props.addAsset(false);
  };

  const hasValue = value !== "";
  const hasCoins = !props.isLoading && props.coins && hasValue;
  const noCoins = hasCoins && props.coins?.length === 0;
  const selectedCoin = coin;
  const noCoinSelected = !coin;
  const today = new Date().toLocaleDateString("en-ca");

  return (
    <Container>
      <Heading>Enter Coin Details</Heading>
      <FormContainer>
        <LeftContainer>
          {noCoinSelected && (
            <DirectionsContainer>
              <div>1. Search and select your coin </div>
              <div>2. Enter amount of coin purchased</div>
              <div>3. Select your purchase date</div>
            </DirectionsContainer>
          )}
          {selectedCoin && (
            <SelectedCoinContainer>
              <ImgContainer>
                <StyledImg src={coin.large} alt="coin" />
              </ImgContainer>
              <div>
                {coin.name} ({coin.symbol})
              </div>
            </SelectedCoinContainer>
          )}
        </LeftContainer>
        <InputContainer>
          <Input
            type="text"
            value={value}
            placeholder="Search Coins"
            onChange={handleChange}
          />
          {errors.coin?.length > 0 && <Error>{errors.coin}</Error>}
          <StyledList>
            {props.isLoading && hasValue && <div>Loading coins...</div>}
            {noCoins && <div>No coins found.</div>}
            {hasCoins &&
              props.coins.map((coin) => (
                <StyledListItem onClick={() => handleClick(coin)} key={coin.id}>
                  <img src={coin.thumb} alt="coin" /> {coin.name} ({coin.symbol}
                  )
                </StyledListItem>
              ))}
          </StyledList>
          <Input
            type="number"
            min=".0001"
            step="1"
            onChange={handleAmountChange}
            placeholder="Coin Amount"
          />
          {errors.purchaseAmount?.length > 0 && (
            <Error>{errors.purchaseAmount}</Error>
          )}
          <Input
            type="date"
            max={today}
            onChange={handleDateChange}
            onKeyDown={(e) => e.preventDefault()}
            placeholder="Purchase Date"
          />
          {errors.date?.length > 0 && <Error>{errors.date}</Error>}
        </InputContainer>
      </FormContainer>
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
