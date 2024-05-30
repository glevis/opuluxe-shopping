import styled from 'styled-components';
import '../styles/styles.css';
import { Link, Outlet } from 'react-router-dom';

export default function Navbar() {
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

    return (
        <>
            <Bar>
                <StyledLink to="home">HOME</StyledLink>
                <StyledLink to="shop">SHOP</StyledLink>
            </Bar>
            <Outlet/>
        </>
    )
}
