import styled from "styled-components";
import { Link } from "react-router-dom";
import { devices } from "GlobalStyles/devices";

export const StyledHeader = styled.div`
  font-size: 2vw;
  font-weight: 500;
  color: ${(props) => props.theme.color};
  margin-left: 8%;
  padding: 5% 0 3%;
`;

export const TableContainer = styled.div`
  margin: 0 8% 5%;
`;

export const StyledTable = styled.div`
  display: table;
  background: ${(props) => props.theme.secondary};
  padding: 2%;
  border-radius: 10px;
  width: 100%;
`;

export const StyledTableHeader = styled.div`
  display: table-header-group;
  font-size: 1.25vw;
  font-weight: 600;
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
  font-size: 1.15vw;
  border-bottom: 1px solid #707070;
  padding: 1% 0.5% 1% 0;
  vertical-align: middle;
`;

export const StyledImg = styled.img`
  width: 1.75vw;
  padding-right: 5px;
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
