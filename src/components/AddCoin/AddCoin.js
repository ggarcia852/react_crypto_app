import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { searchCoins, addAsset, addCoinToAssets } from "store/portfolio/actions";
import { CoinContainer, Container } from "./styles";

function AddCoin(props) {
  const [value, setValue] = useState("");
  const [coin, setCoin] = useState(null);
  const [purchaseAmount, setPurchaseAmount] = useState(0);
  const [date, setDate] = useState('');

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
    setPurchaseAmount(e.target.value)
  }
  const handleDateChange = (e) => {
    setDate(e.target.value)
  }

  const saveAsset = (coin) => {
    setCoin(coin.purchaseAmount= purchaseAmount, coin.date= date)
    props.addCoinToAssets(coin)
    props.addAsset(false)
  }

  const hasValue = value !== "";
  const hasCoins = !props.isLoading && props.coins && hasValue;
  const noCoins = hasCoins && props.coins?.length === 0;
  const selectedCoin = coin;
  const noCoinSelected = !coin;

  return (
    <Container>
      <div>
        <div>Select Coin</div>
      </div>
      <CoinContainer>
        <div>
          {noCoinSelected && (
            <div>
              1.) Search and select coin <br /> 2.) Enter purchase
              amount <br />
              3.) Select your purchase date
            </div>
          )}
          {selectedCoin && (
            <>
              <img src={coin.thumb} alt="coin" />
              <div>
                {coin.name} ({coin.symbol})
              </div>
            </>
          )}
        </div>
        <div>
          <form>
            <input
            type="text"
              value={value}
              placeholder="Search Coins"
              onChange={handleChange}
            />
            <ul>
              {props.isLoading && hasValue && <div>Loading coins...</div>}
              {noCoins && <div>No coins found.</div>}
              {hasCoins &&
                props.coins.map((coin) => (
                  <li onClick={() => handleClick(coin)} key={coin.id}>
                    <img src={coin.thumb} alt="coin" /> {coin.name} (
                    {coin.symbol}){/* </StyledLink> */}
                  </li>
                ))}
            </ul>
          </form>
          <div>
            <input type="number" onChange={handleAmountChange} placeholder="Purchase Amount" />
          </div>
          <div>
            <input type="date" onChange={handleDateChange} placeholder="Purchase Date" />
          </div>
        </div>
      </CoinContainer>
      <div>
        <div>
          <button onClick={() => props.addAsset(false)}>Close</button>
          <button onClick={() => saveAsset(coin)}>Save Coin</button>
        </div>
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
  addCoinToAssets,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCoin);
