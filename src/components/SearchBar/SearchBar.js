import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { searchCoins } from "store/searchBar/actions";
import { withRouter } from "react-router-dom";
import search from "assets/search.svg";
import searchLight from "assets/searchLight.svg";
import {
  Container,
  StyledImg,
  StyledInput,
  StyledLink,
  StyledList,
  StyledListItem,
  StyledPlaceholder,
} from "./styles";

const SearchBar = (props) => {
  const [value, setValue] = useState("");

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
    setValue("");
    props.history.push(`/coin/${coin.id}`);
  };

  const hasValue = value !== "";
  const hasCoins = !props.isLoading && props.coins && hasValue;
  const noCoins = hasValue && props.coins?.length === 0;

  return (
    <Container>
      <StyledPlaceholder>
        <StyledImg src={props.theme ? search : searchLight} alt="search" />
        <StyledInput
          value={value}
          onChange={handleChange}
          placeholder="Search..."
        />
      </StyledPlaceholder>
      <div>
        <StyledList>
          {props.isLoading && hasValue && <div>Loading coins...</div>}
          {noCoins && <div>No coins found.</div>}
          {hasCoins &&
            props.coins.map((coin) => (
              <StyledListItem onClick={() => handleClick(coin)} key={coin.id}>
                <StyledLink to={`/coin/${coin.id}`}>
                  <StyledImg src={coin.thumb} alt="coin" /> {coin.name} (
                  {coin.symbol})
                </StyledLink>
              </StyledListItem>
            ))}
        </StyledList>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.searchBar.isLoading,
  hasError: state.searchBar.hasError,
  coins: state.searchBar.coins,
  theme: state.theme.darkTheme,
});

const mapDispatchToProps = {
  searchCoins,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchBar));
