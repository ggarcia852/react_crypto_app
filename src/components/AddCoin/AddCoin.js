import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { searchCoins, addAsset } from "store/portfolio/actions";
import { CoinContainer, Container } from "./styles";

function AddCoin(props) {
  const [value, setValue] = useState("");
  const [coin, setCoin] = useState(null);

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
              1.) Search coins and select your coin <br /> 2.) Enter purchase
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
          <div>
            <input
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
          </div>
          <div>
            <input placeholder="Purchase Amount" />
          </div>
          <div>
            <input placeholder="Purchase Date" />
          </div>
        </div>
      </CoinContainer>
      <div>
        <div>
          <button onClick={() => props.addAsset(false)}>Close</button>
          <button>Save Coin</button>
        </div>
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  showAddAsset: state.portfolio.showAddAsset,
  isLoading: state.portfolio.isLoading,
  hasError: state.portfolio.hasError,
  coins: state.portfolio.coins,
  theme: state.theme.darkTheme,
});

const mapDispatchToProps = {
  searchCoins,
  addAsset,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCoin);
