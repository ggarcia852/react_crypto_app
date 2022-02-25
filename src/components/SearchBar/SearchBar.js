import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { StyledInput, StyledLink, StyledList, StyledListItem } from "./styles";

class SearchBar extends React.Component {
  state = {
    searchValue: "",
    list: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push(`/coin/${this.state.searchValue.toLowerCase()}`);
    this.setState({ searchValue: "", list: null });
  };

  handleChange = (e) => {
    this.setState({ searchValue: e.target.value, list: null });
  };

  handleSearch = async (value) => {
    try {
      const { data } = await axios(
        `https://crypto-app-server.herokuapp.com/coins/${value}`
      );
      this.setState({
        list: data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleClick = (coin) => {
    this.props.history.push(`/coin/${coin.id}`);
    this.setState({ searchValue: "", list: null });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      this.state.searchValue !== prevState.searchValue &&
      this.state.searchValue !== ""
    ) {
      this.handleSearch(this.state.searchValue);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <StyledInput
          value={this.state.searchValue}
          onChange={this.handleChange}
          placeholder="Search..."
        />
        <StyledList>
          {this.state.list
            ? this.state.list.map((coin) => (
                <StyledListItem
                  onClick={(e) => this.handleClick(coin)}
                  key={coin.id}
                >
                  <StyledLink to={`/coin/${coin.id}`}>
                    {coin.name} ({coin.symbol})
                  </StyledLink>
                </StyledListItem>
              ))
            : null}
        </StyledList>
      </form>
    );
  }
}

export default withRouter(SearchBar);
