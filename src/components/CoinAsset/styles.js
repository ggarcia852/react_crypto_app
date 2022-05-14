import styled from "styled-components";
import { Link } from "react-router-dom";
import { devices } from "GlobalStyles/devices";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`;

export const StatisticHeading = styled.div`
  font-size: 2.5vw;
  margin-bottom: 3%;
  font-weight: 500;
`;

export const AssetContainer = styled.div`
  margin-bottom: 10vh;
  width: 100%;
  border-bottom: 1px dotted red;
  @media ${devices.tablet} {
    display: flex;
    border: none;
  }
`;

export const CoinContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: auto;
  padding: 5%;
  width: 50vw;
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
  @media ${devices.tablet} {
    margin-right: 3%;
    padding: 3%;
    width: 15%;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 10%;
  background: ${(props) => props.theme.main};
  @media ${devices.tablet} {
    padding: 25%;
  }
`;

export const StyledImg = styled.img`
  width: 10vw;
  @media ${devices.tablet} {
    width: 5vw;
  }
`;

export const StyledCoin = styled.div`
  font-size: 5vw;
  text-align: center;
  margin: 5%;
  @media ${devices.tablet} {
    margin: 25%;
    font-size: 1.75vw;
  }
`;

export const StyledCoinLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.color};
`;

export const MarketContainer = styled.div`
  display: flex;
  flex-flow: column;
  margin: 3% 0;
  @media ${devices.tablet} {
    justify-content: space-between;
    width: 100%;
    margin: 1% 0;
  }
`;

export const EditContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CoinHeading = styled.span`
  font-size: 3vw;
  margin: 2%;
  @media ${devices.tablet} {
    font-size: 1.25vw;
  }
`;

export const StatsContainer = styled.div`
  background: ${(props) => props.theme.secondary};
  padding: 4%;
  border-radius: 10px;
  font-size: 3.5vw;
  @media ${devices.tablet} {
    display: flex;
    font-size: 1vw;
    justify-content: space-around;
    flew-flow: row;
  }
`;

export const StyledPercentImg = styled.img`
  width: 2vw;
  margin-bottom: 1vw;
  @media ${devices.tablet} {
    width: .75vw;
    margin-bottom: .35vw;
  }
`;

export const ColoredSpan = styled.span.attrs((props) => ({
  style: {
    color: `${props.color}`,
  },
}))``;
