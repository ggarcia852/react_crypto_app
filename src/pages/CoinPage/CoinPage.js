import React from "react";
import { CoinPageChart, CoinPageInfo, ConversionBar } from "components";

const CoinPage = (props) => {
  return (
    <>
      <CoinPageInfo {...props} />
      <ConversionBar />
      <CoinPageChart {...props} />
    </>
  );
};

export default CoinPage;
