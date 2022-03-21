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

  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push(`/coin/${value.toLowerCase()}`);
    setValue("");
    setCoins(null);
    setLoading(false);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    setCoins(null);
    if (value !== "") {
      setLoading(true);
    }
  };

  const handleSearch = async (value) => {
    try {
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

  useEffect(() => {
    if (value !== "") {
      handleSearch(value);
    }
  }, [value]);

  const hasCoins = !loading && coins;
  const hasValue = value !== ""

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
// export default SearchBar;

// class SearchBar extends React.Component {
//   state = {
//     searchValue: "",
//     list: [],
//     isLoading: false,
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.history.push(`/coin/${this.state.searchValue.toLowerCase()}`);
//     this.setState({ searchValue: "", list: null, isLoading: false });
//   };

//   handleChange = (e) => {
//     this.setState({ searchValue: e.target.value, list: null, isLoading: true });
//   };

//   handleSearch = async (value) => {
//     try {
//       const { data } = await axios(
//         `https://crypto-app-server.herokuapp.com/coins/${value}`
//       );
//       this.setState({
//         list: data,
//         isLoading: false,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   handleClick = (coin) => {
//     this.props.history.push(`/coin/${coin.id}`);
//     this.setState({ searchValue: "", list: null, isLoading: false });
//   };

//   componentDidUpdate = (prevProps, prevState) => {
//     if (
//       this.state.searchValue !== prevState.searchValue &&
//       this.state.searchValue !== ""
//     ) {
//       this.handleSearch(this.state.searchValue);
//     }
//   };

//   render() {
//     return (
//       <StyledContainer>
//         <StyledImg src={search} alt="search" />
//         <form onSubmit={this.handleSubmit}>
//           <StyledInput
//             value={this.state.searchValue}
//             onChange={this.handleChange}
//             placeholder="Search..."
//           />
//           <StyledList>
//             {this.state.isLoading && <div>loading...</div>}
//             {this.state.list
//               ? this.state.list.map((coin) => (
//                   <StyledListItem
//                     onClick={() => this.handleClick(coin)}
//                     key={coin.id}
//                   >
//                     <StyledLink to={`/coin/${coin.id}`}>
//                       <img src={coin.thumb} alt="coin" /> {coin.name} (
//                       {coin.symbol})
//                     </StyledLink>
//                   </StyledListItem>
//                 ))
//               : null}
//           </StyledList>
//         </form>
//       </StyledContainer>
//     );
//   }
// }
