import styled from "styled-components";
import { devices } from "GlobalStyles/devices";

export const StyledTitle = styled.div`
  font-size: 3vw;
  font-weight: 500;
  margin: 5% 8%;
  @media ${devices.tablet} {
    font-size: 1.75vw;
    margin: 3% 8%;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-flow: column;
  margin: 0 8%;
  @media ${devices.tablet} {
    flex-flow: row;
    justify-content: space-between;
  }
`;

export const StyledLeftContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  min-width: 25%;
  margin-bottom: 5%;
  @media ${devices.tablet} {
    margin-bottom: 0;
  }
`;

export const StyledCoinContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 15%;
  min-height: 50%;
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
  font-size: 4.5vw;
  margin-bottom: 5%;
  @media ${devices.tablet} {
    font-size: 1.75vw;
    margin-bottom: 0;
  }
`;

export const StyledCoinImg = styled.img`
  width: 15vw;
  padding: 15%;
  background: ${(props) => props.theme.main};
  margin-bottom: 10%;
  border-radius: 12px;
  @media ${devices.tablet} {
    width: 4.5vw;
    padding: 12%;
  }
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
  font-size: 3vw;
  @media ${devices.tablet} {
    font-size: 1.25vw;
  }
`;

export const StyledLinkBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 8%;
  @media ${devices.tablet} {
    justify-content: space-between;
    padding: 10%;
  }
`;

export const StyledLinkImg = styled.img`
  width: 2vw;
  margin: 0 4vw;
  &:hover {
    cursor: pointer;
  }
  @media ${devices.tablet} {
    width: 1vw;
    margin: 0;
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
  margin-bottom: 5%;
  @media ${devices.tablet} {
    margin-bottom: 0;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledPrice = styled.div`
  font-size: 6vw;
  font-weight: 600;
  margin-top: 1.5vw;
  @media ${devices.tablet} {
    font-size: 3vw;
  }
`;

export const StyledProfit = styled.span`
  font-size: 3vw;
  @media ${devices.tablet} {
    font-size: 1.25vw;
  }
`;

export const StyledPriceStat = styled.div`
  display: flex;
  align-items: center;
  font-size: 3vw;
  margin-bottom: 2vw;
  @media ${devices.tablet} {
    font-size: 1.25vw;
  }
`;

export const StyledPriceStatPercent = styled.span.attrs((props) => ({
  style: {
    color: `${props.color}`,
  },
}))`
  font-size: 3vw;
  @media ${devices.tablet} {
    font-size: 1.25vw;
  }
`;

export const StyledPricePercentArrow = styled.img`
  width: 2vw;
  margin: 0.5vw;
  @media ${devices.tablet} {
    width: 1vw;
  }
`;

export const StyledPriceArrow = styled.img`
  width: 2vw;
  margin-right: 1vw;
  @media ${devices.tablet} {
    width: 1vw;
  }
`;

export const StyledPriceLayers = styled.img`
  width: 2.5vw;
  margin: 3vw;
  @media ${devices.tablet} {
    width: 1.75vw;
    margin: 2vw;
  }
`;

export const StyledMarketContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 3%;
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
  min-width: 25%;
`;

export const StyledMarketBox = styled.div`
  text-align: center;
  @media ${devices.tablet} {
    text-align: justify;
  }
`;

export const StyledMarketStat = styled.div`
  font-size: 3vw;
  padding-top: 0.75vw;
  @media ${devices.tablet} {
    font-size: 1.25vw;
  }
`;

export const StyledStatImg = styled.img`
  width: 3vw;
  margin-right: 1vw;
  @media ${devices.tablet} {
    width: 1.5vw;
  }
`;

export const StyledBullets = styled.div`
  display: flex;
  justify-content: space-between;
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
  font-size: 3vw;
  font-weight: 500;
  @media ${devices.tablet} {
    font-size: 1.75vw;
  }
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
  text-align: center;
  background: ${(props) => props.theme.secondary};
  padding: 3%;
  margin: 0 8% 5%;
  border-radius: 10px;
  font-size: 2.5vw;
  @media ${devices.tablet} {
    font-size: 1.35vw;
    margin: 0 8% 3%;
  }
`;

export const StyledLinksContainer = styled.div`
  display: flex;
  flex-flow: column;
  margin: 0px 8% 3%;
  @media ${devices.tablet} {
    flex-flow: row;
    justify-content: space-between;
  }
`;

export const StyledBlockchainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2vw 0;
  background: ${(props) => props.theme.secondary};
  border-radius: 10px;
  font-size: 2.5vw;
  margin: 3% 0;
  @media ${devices.tablet} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.25vw;
  }
`;

export const StyledBlockchainImg = styled.img`
  width: 2vw;
  margin: 0 3vw;
  &:hover {
    cursor: pointer;
  }
  @media ${devices.tablet} {
    width: 1vw;
    margin: 0 2vw;
  }
`;

export const BoldText = styled.span`
  font-weight: 600;
  font-size: 3vw;
  @media ${devices.tablet} {
    font-size: 1.25vw;
  }
`;
