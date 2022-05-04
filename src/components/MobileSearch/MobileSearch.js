import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { searchCoins } from "store/searchBar/actions";
import {
  Container,
  StyledExitContainer,
  StyledInputContainer,
  StyledSearchImg,
  StyledSearchInput,
  StyledImg,
  StyledLink,
  StyledList,
  StyledListItem,
} from "./styles";
import exitWhite from "assets/exitWhite.svg";
import search from "assets/search.svg";
import { StyledExitImg } from "./styles";

function MobileSearch(props) {
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

  const hasValue = value !== "";
  const hasCoins = !props.isLoading && props.coins && hasValue;
  const noCoins = hasValue && props.coins?.length === 0;

  const handleClick = () => {
    props.showSearch();
  };
  return (
    <Container>
      <div>
        <StyledExitContainer>
          <StyledExitImg
            type="image"
            src={exitWhite}
            alt="exit"
            onClick={handleClick}
          />
          Close
        </StyledExitContainer>
        <StyledInputContainer>
          <StyledSearchImg src={search} alt="search" />
          <StyledSearchInput
            value={value}
            onChange={handleChange}
            type="search"
            placeholder="Search..."
          />
        </StyledInputContainer>
      </div>
      <StyledList>
        {props.isLoading && hasValue && <div>Loading coins...</div>}
        {noCoins && <div>No coins found.</div>}
        {hasCoins &&
          props.coins.map((coin) => (
            <StyledListItem onClick={handleClick} key={coin.id}>
              <StyledLink to={`/coin/${coin.id}`}>
                <StyledImg src={coin.thumb} alt="coin" /> {coin.name} (
                {coin.symbol})
              </StyledLink>
            </StyledListItem>
          ))}
      </StyledList>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state.searchBar.isLoading,
  hasError: state.searchBar.hasError,
  coins: state.searchBar.coins,
  theme: state.theme.darkTheme,
});

const mapDispatchToProps = {
  searchCoins,
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileSearch);
