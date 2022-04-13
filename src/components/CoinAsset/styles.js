import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
`;

export const CoinHeading = styled.div`
    max-font-size: 25px;
    margin-top: 10px;
`;

export const StatisticHeading = styled.div`
  font-size: 22px;
  margin-bottom: 50px;
`;

export const AssetContainer = styled.div`
  display: flex;
  margin-bottom: 40px;
  font-size: 18px;
`;

export const StatsContainer = styled.div`
  background: ${(props) => props.theme.secondary};
  padding: 40px;
`;

export const EditContainer = styled.div`
display: flex;
align-items: center;

`;

export const EditImg = styled.img`
  width: 35px;
  margin-left: 10px;
`;

export const MarketContainer = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-between;

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
//   height: 45px;
`;


export const Stat = styled.span`
    margin-right: 50px;
`