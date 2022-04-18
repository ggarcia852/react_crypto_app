import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.div`
  display: flex;
  height: 131px;
`;

export const StyledOverview = styled.div`
  display: flex;
  font-size: 22px;
  color: ${(props) => props.theme.color};
  height: 61px;
  padding-left: 93px;
  padding-top: 65px;
`;

export const StyledCoinList = styled.div`
  margin: 0px 93px 187px 93px;
`;

export const StyledTable = styled.div`
  display: table;
  background: ${(props) => props.theme.secondary};
  padding: 50px 35px 30px 50px;
  border-radius: 10px;
  width: 100%;
`;

export const StyledTableHeader = styled.div`
  display: table-header-group;
  font-size: 19px;
  font-weight: bold;
`;

export const StyledTableHeaderCell = styled.div`
  display: table-cell;
  text-align: justify;
  padding: 10px 10px 0px;
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
  max-font-size: 19px;
  border-bottom: 1px solid #707070;
  padding: 25px 10px 25px 0px;
`;

export const StyledImg = styled.img`
  width: 33.5px;
  height: 33.5px;
  padding-right: 13px;
`;

export const StyledCoinLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.color};
`;

export const StyledBullets = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 230px;
`;

export const StyledChart = styled.div`
  display: flex;
  max-width: 115px;
  height: 45px;
`;

export const Loader = styled.span`
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.secondary};
  width: 100;
`;
