import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer=styled.div`
    max-width: 2600px;
    width: 100%;
    max-height: 70px;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: #3498db;
`

export const NavbarWrapper=styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    color: white;
    gap: 30px;
    font-size: 20px;
    width: 100%;
    justify-content: space-between;
`

export const NavbarLinks=styled.div`
    display: flex;
    justify-content: space-between;
`

export const NavbarLink=styled.p`
    color: #ffffff;
    font-size: 16px;
    margin: 0 15px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
        color: #1f618d;
        text-decoration: underline;
    }
`

export const StyledLink=styled(Link)`
    color: #ffffff;
    text-decoration: none;
    font-size: 16px;
    margin: 0 15px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
        color: #1f618d;
    }
`