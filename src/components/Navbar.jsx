import styled from 'styled-components';
import '../styles/styles.css';
import { Link, Outlet } from 'react-router-dom';

const NavGrid = styled.div`
    display: grid;
    grid-template-columns: 3;
    grid-template-rows: 1;
    grid-auto-flow: column;
    width: 100%;
    text-align: center;
`;
const Bar = styled.div`
        width: 100%;
        background: #000000;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        gap: 1em;
        height: 5em;
        position: absolute;
        align-items: center;
        justify-content: space-evenly;
        box-shadow: 0px -10px 10px 10px black;
    `;

const StyledLink = styled(Link)`
        color: white;
        text-decoration: none;
        font-size: 2em;
    `;


export default function Navbar() {

    return (
        <>
            <Bar>
                <NavGrid>
                    <StyledLink to="home">HOME</StyledLink>
                    <StyledLink to="shop">SHOP</StyledLink>
                    <p>Cart: 0</p>
                </NavGrid>
            </Bar>
            <Outlet/>
        </>
    )
}
