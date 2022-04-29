import styled from "styled-components";

export const StyledTitle = styled.div`
  font-size: 1.75vw;
  font-weight: 500;
  margin: 3% 8%;
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 8%;
`;

export const StyledLeftContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  min-width: 25%;
`;

export const StyledCoinContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 15%;
  min-height: 50%;
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
  font-size: 1.75vw;
`;

export const StyledCoinImg = styled.img`
  width: 4.5vw;
  padding: 12%;
  background: ${(props) => props.theme.main};
  margin-bottom: 10%;
  border-radius: 12px;
`;

export const StyledCoinBox = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
`;

export const StyledLinkContainer = styled.div`
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
  font-size: 1.25vw;
  padding: 3%;
`;

export const StyledLinkBox = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLinkImg = styled.img`
  width: 1vw;
  margin: 1vw;
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
  min-width: 25%;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledPrice = styled.div`
  font-size: 3vw;
  font-weight: 600;
  margin-top: 1.5vw;
`;

export const StyledProfit = styled.span`
  font-size: 1.25vw;
`;

export const StyledPriceStat = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.25vw;
  margin-bottom: 2vw;
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
  margin: 0.5vw;
`;

export const StyledPriceArrow = styled.img`
  width: 1vw;
  margin-right: 1vw;
`;

export const StyledPriceLayers = styled.img`
  width: 1.75vw;
  margin: 2vw;
`;

export const StyledMarketContainer = styled.div`
  display: flex;
  flex-flow: column;
  padding: 3%;
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
  min-width: 25%;
`;

export const StyledMarketStat = styled.div`
  font-size: 1.25vw;
  padding-top: 0.75vw;
`;

export const StyledStatImg = styled.img`
  width: 1.5vw;
  margin-right: 1vw;
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
}))``;

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

export const StyledDescImgContainer = styled.div`
  display: flex;
  justify-content: center;

`;

export const StyledDescImg = styled.img`
  display: flex;
  margin-bottom: 2vw;
  width: 1.75vw;
`;

export const StyledDescription = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  // min-height: 0px;
  text-align: center;
  background: ${(props) => props.theme.secondary};
  padding: 3%;
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
  align-items: center;
  width: 25%;
  padding: .75vw;
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
  font-size: 1.25vw;
  justify-content: space-between;
`;

export const BoldText = styled.span`
  font-weight: 600;
  font-size: 1.25vw;
`;
