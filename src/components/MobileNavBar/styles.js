import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    background: ${props => props.theme.secondary}
`

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin: 2% 1% 2% 8%;
`

export const NavBarBottom = styled.div`
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0%;
    width: 100%;
    height: 8vh;
    background: ${props => props.theme.secondary}
`
export const NavBarBottomBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin: 2% 8%;
`

export const StyledInputImg = styled.img`
    width: 33px;
`

export const StyledLink= styled(NavLink)`
    width: 30px;
`