import React, { useEffect, useState } from "react";
import axios from "axios";
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
  const [loading, setLoading] = useState(false);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    if (value !== "") {
      handleSearch(value);
    }
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push(`/coin/${value.toLowerCase()}`);
    setValue("");
    setCoins(null);
    setLoading(false);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    if (value === "") {
      setLoading(false);
    }
  };

  const handleSearch = async (value) => {
    try {
      setLoading(true);
      const { data } = await axios(
        `https://crypto-app-server.herokuapp.com/coins/${value}`
      );
      setCoins(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = (coin) => {
    setValue("");
    setCoins(null);
    setLoading(false);
    props.history.push(`/coin/${coin.id}`);
  };

  const hasCoins = !loading && coins;
  const hasValue = value !== "";

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
          {loading && hasValue && <div>loading...</div>}
          {hasCoins &&
            coins.map((coin) => (
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

export default withRouter(SearchBar);