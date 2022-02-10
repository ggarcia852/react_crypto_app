import React from "react";
import { withRouter } from "react-router-dom";
import { StyledInput } from "./styles";

class SearchBar extends React.Component {
  state = {
    searchValue: "",
    hasError: null,
    coinData: null,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push(`/coin/${this.state.searchValue.toLowerCase()}`);
    this.setState({ searchValue: "" });
  };

  handleChange = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <StyledInput
          value={this.state.searchValue}
          placeholder="Search..."
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default withRouter(SearchBar);
