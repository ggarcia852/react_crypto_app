import styled from "styled-components";

export const StyledTitle = styled.div`
  font-size: 22px;
  font-weight: 500;
  margin: 80px 0px 50px 12%;
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 12%;
  height: 380px;
`;

export const StyledLeftContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

export const StyledCoinContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-right: 30px;
  padding: 0px 40px;
  height: 80%;
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  font-size: 25px;
`;

export const StyledCoinImg = styled.img`
  width: 45px;
  padding: 30px;
  background: ${(props) => props.theme.main};
  margin-bottom: 10px;
  border-radius: 10px;
`;

export const StyledLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 15%;
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
  font-size: 15px;
  padding: 15px;
  margin-right: 30px;
`;

export const StyledLinkImg = styled.img`
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
  padding: 0px 40px;
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
  margin-right: 30px;
  overflow: scroll;
`;

export const StyledPrice = styled.div`
  font-size: 44px;
  font-weight: 600;
`;

export const StyledPriceStat = styled.div`
  display: flex;
  font-size: 18px;
  margin-bottom: 20px;
`;
export const StyledPriceStatPercent = styled.span.attrs((props) => ({
  style: {
    color: `${props.color}`,
  },
}))`
  font-size: 19px;
`;

export const StyledPricePercentArrow = styled.img`
  padding-bottom: 5px;
  padding-right: 2px;
  margin-left: 7px;
`;

export const StyledPriceArrow = styled.img`
  margin: 25px 15px 0px 0px;
`;

export const StyledPriceLayers = styled.img`
  margin: 25px;
`;

export const StyledMarketContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  overflow: scroll;
  padding: 0px 40px;
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
`;

export const StyledMarketStat = styled.div`
  font-size: 18px;
  padding-top: 5px;
`;

export const StyledMarketStatPercent = styled.span.attrs((props) => ({
  style: {
    color: `${props.color}`,
  },
}))`
  font-size: 18px;
  padding-top: 5px;
`;

export const StyledStatImg = styled.img`
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
  margin: 50px 12%;
  font-size: 22px;
  font-weight: 500;
`;

export const StyledDescImg = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 25px;
`;

export const StyledDescription = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 0px;
  text-align: center;
  background: ${(props) => props.theme.secondary};
  padding: 30px 27px 52px 27px;
  margin: 0px 12% 30px;
  border-radius: 10px;
  font-size: 19px;
`;

export const StyledLinksContainer = styled.div`
  display: flex;
  margin: 0px 12% 50px;
  justify-content: space-between;
`;

export const StyledBlockchainContainer = styled.div`
  display: flex;
  width: 25%;
  padding: 20px 15px;
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
  font-size: 15px;
  justify-content: space-between;
`;

export const BoldText = styled.span`
  font-weight: 600;
  font-size: 18px;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;
