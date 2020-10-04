import React from 'react'
import { Nav, NavContainer, NavLink } from './Navbar.elements';

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
            </Nav>
        </>
    )
}

export default Navbar
