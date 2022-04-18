import React, { useEffect } from "react";
import { CoinPageChart, CoinPageInfo, ConversionBar } from "components";

const CoinPage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <CoinPageInfo {...props} />
      <ConversionBar />
      <CoinPageChart {...props} />
    </>
  );
};

export default CoinPage;
