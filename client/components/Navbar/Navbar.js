import React from 'react'
import { Nav, NavContainer, NavLink, MobileNavMenu } from './Navbar.elements';

const Navbar = () => {
    return (
        <>
            <Nav>
                le title
                <NavContainer>
                    <NavLink>
                        Home
                    </NavLink>
                    <NavLink>
                        About
                    </NavLink>
                </NavContainer>
                <MobileNavMenu>O</MobileNavMenu>
            </Nav>
        </>
    )
}

export default Navbar
