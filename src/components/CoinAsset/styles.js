import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`;

export const CoinHeading = styled.div`
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 40px;
`;

export const StatisticHeading = styled.div`
  font-size: 21px;
  margin-bottom: 50px;
  font-weight: 500;
`;

export const AssetContainer = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.secondary};
  padding: 25px;
  border-radius: 10px;
`;

export const EditContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const MarketContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0px;
`;

export const CoinContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-right: 30px;
  justify-content: center;
  height: 295px;
  width: 258px;
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 105px;
  width: 105px;
  border-radius: 10px;
  background: ${(props) => props.theme.main};
`;

export const StyledImg = styled.img`
  width: 45px;
`;

export const Stat = styled.span`
  // margin-right: 40px;
`;

export const Coin = styled.span`
  margin-right: 10px;
`;

export const ColoredSpan = styled.span.attrs((props) => ({
  style: {
    color: `${props.color}`,
  },
}))``;

export const StyledCoinLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.color};
`;
