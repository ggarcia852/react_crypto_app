import styled from "styled-components";
import { Link } from "react-router-dom";
import { devices } from "GlobalStyles/devices";

export const StyledHeader = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.theme.color};
  margin-left: 8%;
  padding: 2% 0;
  @media ${devices.tablet} {
    font-size: 22px;
  }
`;

export const TableContainer = styled.div`
  margin: 0 8% 12%;
  @media ${devices.tablet} {
    margin: 0 8% 5%;
  }
`;

export const StyledTable = styled.div`
  display: table;
  background: ${(props) => props.theme.secondary};
  padding: 4%;
  padding-bottom: 1%;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
`;

export const StyledTableHeader = styled.div`
  display: table-header-group;
  font-size: 12px;
  font-weight: 500;
  @media ${devices.tablet} {
    font-size: 1.25vw;
    font-weight: 600;
  }
`;

export const StyledTableHeaderCell = styled.div`
  display: table-cell;
`;

export const StyledTableBody = styled.div`
  display: table-row-group;
`;

export const StyledTableRow = styled.div`
  display: table-row;
`;

export const StyledTableCell = styled.div.attrs((props) => ({
  style: {
    color: `${props.color}`,
  },
}))`
  display: table-cell;
  font-size: 12px;
  border-bottom: 1px solid #707070;
  vertical-align: middle;
  padding: 1%;
  @media ${devices.tablet} {
    font-size: 1.15vw;
    padding: 1.5% 0;
  }
`;

export const StyledImg = styled.img`
  width: 5vw;
  padding: 0 5%;
  @media ${devices.tablet} {
    width: 1.75vw;
    padding-right: 3%;
  }
`;

export const StyledPercentImg = styled.img`
  display: flex;
  width: 2vw;
  @media ${devices.tablet} {
    width: 1vw;
    display: inline;
    padding-bottom: 0.5vh;
  }
`;

export const StyledCoinLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme.color};
`;

export const StyledBullets = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledChart = styled.div`
  width: 15vw;
  height: 8vh;
  @media ${devices.tablet} {
    width: 10vw;
  }
`;

export const Loader = styled.span`
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.secondary};
  width: 100;
`;
