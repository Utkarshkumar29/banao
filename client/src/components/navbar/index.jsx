    import React from "react";
    import { NavbarContainer, NavbarLink, NavbarLinks, NavbarWrapper, StyledLink } from "../../styles/navbar";
    import { Link } from "react-router-dom"

    const Navbar=()=>{
        return(
            <NavbarContainer>
                <NavbarWrapper>
                    <NavbarLinks>
                        <NavbarLink>Home</NavbarLink>
                        <NavbarLink>Menu</NavbarLink>
                        <NavbarLink>About US</NavbarLink>
                        <NavbarLink>Contact Us</NavbarLink>
                    </NavbarLinks>
                    <NavbarLinks>
                        <StyledLink to='/login' style={{}}>Login In</StyledLink>
                        <StyledLink to='/'>Sign In</StyledLink>
                    </NavbarLinks>
                </NavbarWrapper>
            </NavbarContainer>
        )
    }

    export default Navbar