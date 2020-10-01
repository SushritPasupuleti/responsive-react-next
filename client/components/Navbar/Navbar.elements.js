import styled from 'styled-components';

export const Nav = styled.nav`
background: rgb(0 208 255);
height: 80px;
display: flex;
align-self: center;
position: sticky;
top: 0;
z-index: 999;
font-size: 1.2rem;
padding: 1rem;

&:hover {
    color: red;
}
`

export const NavContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;

`