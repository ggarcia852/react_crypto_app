import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { searchCoins } from "store/searchBar/actions"
import { withRouter } from "react-router-dom";
import search from "assets/search.svg";
import {
  StyledContainer,
  StyledImg,
  StyledInput,
  StyledLink,
  StyledList,
  StyledListItem,
} from "./styles";

const SearchBar = (props) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (value !== "") {
      props.searchCoins(value);
    }
    // eslint-disable-next-line
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push(`/coin/${value.toLowerCase()}`);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = (coin) => {
    setValue("");
    props.history.push(`/coin/${coin.id}`);
  };

  const hasValue = value !== "";
  const hasCoins = !props.isLoading && props.coins && hasValue;

  return (
    <StyledContainer>
      <StyledImg src={search} alt="search" />
      <form onSubmit={handleSubmit}>
        <StyledInput
          value={value}
          onChange={handleChange}
          placeholder="Search..."
        />
        <StyledList>
          {props.isLoading && hasValue && <div>loading...</div>}
          {hasCoins &&
            props.coins.map((coin) => (
              <StyledListItem onClick={() => handleClick(coin)} key={coin.id}>
                <StyledLink to={`/coin/${coin.id}`}>
                  <img src={coin.thumb} alt="coin" /> {coin.name} ({coin.symbol}
                  )
                </StyledLink>
              </StyledListItem>
            ))}
        </StyledList>
      </form>
    </StyledContainer>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.searchBar.isLoading,
  hasError: state.searchBar.hasError,
  coins: state.searchBar.coins
})

const mapDispatchToProps = {
  searchCoins,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchBar));