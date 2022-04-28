import styled from "styled-components";

const Container = styled.div`
  margin: auto;
`

export const StyledTitle = styled.div`
  font-size: 1.75vw;
  font-weight: 500;
  margin: 3% 8%;
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 8%;
  gap: 10px;
`;

export const StyledLeftContainer = styled.div`
  display: flex;
  flex-flow: column;
`;

export const StyledCoinContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-bottom: 10%;
  padding: 25%;
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
  font-size: 1.75vw;
`;

export const StyledCoinImg = styled.img`
  width: 5vw;
  padding: 15%;
  background: ${(props) => props.theme.main};
  margin-bottom: 10%;
  border-radius: 10px;
`;

export const StyledLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
  font-size: 1.25vw;
  padding: 10%;
`;

export const StyledLinkImg = styled.img`
  width: 1.5vw;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledPriceContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 3%;
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
  overflow: scroll;
`;

export const StyledPrice = styled.div`
  font-size: 3.25vw;
  font-weight: 600;
`;

export const StyledProfit = styled.span`
  font-size: 1.25vw;
`

export const StyledPriceStat = styled.div`
  display: flex;
  font-size: 1.25vw;
  margin-bottom: 10%;
`;
export const StyledPriceStatPercent = styled.span.attrs((props) => ({
  style: {
    color: `${props.color}`,
  },
}))`
  font-size: 1.25vw;
`;

export const StyledPricePercentArrow = styled.img`
  width: 1vw;
  padding-bottom: 5px;
  padding-right: 2px;
  margin-left: 7px;
`;

export const StyledPriceArrow = styled.img`
  width: 1vw;
  margin: 25px 15px 0px 0px;
`;

export const StyledPriceLayers = styled.img`
  width: 1.75vw;
  margin: 10%;
`;

export const StyledMarketContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  overflow: scroll;
  padding: 3%;
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
`;

export const StyledMarketStat = styled.div`
  // display: flex;
  font-size: 1.25vw;
  padding-top: 5px;
`;

export const StyledStatImg = styled.img`
  width: 1.75vw;
  margin-right: 15px;
`;

export const StyledBullets = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 230px;
`;

export const ColoredDiv = styled.div.attrs((props) => ({
  style: {
    color: `${props.color}`,
  },
}))`
  display: flex;
`;
export const ColoredSpan = styled.span.attrs((props) => ({
  style: {
    color: `${props.color}`,
  },
}))``;

export const StyledDescriptionTitle = styled.div`
  margin: 3% 8%;
  font-size: 1.75vw;
  font-weight: 500;
`;

export const StyledDescImg = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 3%;
`;

export const StyledDescription = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 0px;
  text-align: center;
  background: ${(props) => props.theme.secondary};
  padding: 30px 27px 52px 27px;
  margin: 0 8% 3%;
  border-radius: 10px;
  font-size: 1.35vw;
`;

export const StyledLinksContainer = styled.div`
  display: flex;
  margin: 0px 8% 3%;
  justify-content: space-between;
`;

export const StyledBlockchainContainer = styled.div`
  display: flex;
  width: 25%;
  padding: 20px 15px;
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
  font-size: 1.25vw;
  justify-content: space-between;
`;

export const BoldText = styled.span`
  font-weight: 600;
  font-size: 1.25vw;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;
