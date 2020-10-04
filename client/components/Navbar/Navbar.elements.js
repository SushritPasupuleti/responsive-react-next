import styled from 'styled-components';

export const Nav = styled.nav`
    background: rgb(0 208 255);
    height: 70px;
    display: flex;
    align-self: center;
    position: sticky;
    top: 0;
    z-index: 999;
    font-size: 1.2rem;
    padding: 1rem;
    justify-content: space-between;
     
    &:hover {
        color: red;
    }

    @media (max-width: 768px){
        color: white;
    }
`

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 70px;
`

export const NavLink = styled.a`
    color: white;
    margin-left: 1rem;

    @media (max-width: 768px){
        visibility: hidden;
    }
`

export const MobileNavMenu = styled.button`
    color: white;
    margin-right: 1rem;

`