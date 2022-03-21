import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CoinList, CoinPage, Portfolio } from "pages";
import { NavBar } from "components";
import { Container, GlobalStyle } from "GlobalStyles/styles";

const App = () => {
  const [currency, setCurrency] = useState("usd");

  const handleCurrency = (currency) => {
    setCurrency(currency);
  };

  return (
    <Container>
      <GlobalStyle />
      <Router>
        <div>
          <NavBar handleCurrency={handleCurrency} />
          <Switch>
            <Route exact path="/">
              <CoinList currency={currency} />
            </Route>
            {/* <Route  exact path="/coin/:coinId">
              <CoinPage currency={currency} />
            </Route>  */}
            <Route
              exact
              path="/coin/:coinId"
              render={(props) => <CoinPage {...props} currency={currency} />}
            />
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
        </div>
      </Router>
    </Container>
  );
};

export default App;
// export default class App extends React.Component {
//   state = {
//     currency: "usd",
//   };

//   handleCurrency = (currency) => {
//     this.setState({ currency });
//   };

//   render() {
//     return (
//       <Container>
//         <GlobalStyle />
//         <Router>
//           <div>
//             <NavBar handleCurrency={this.handleCurrency} />
//             <Switch>
//               <Route exact path="/">
//                 <CoinList currency={this.state.currency} />
//               </Route>
//               <Route
//                 exact
//                 path="/coin/:coinId"
//                 render={(props) => (
//                   <CoinPage {...props} currency={this.state.currency} />
//                 )}
//               />
//               <Route path="/portfolio" component={Portfolio} />
//             </Switch>
//           </div>
//         </Router>
//       </Container>
//     );
//   }
// }
