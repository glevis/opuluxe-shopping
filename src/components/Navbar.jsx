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
    `;
    /*
    const RouterLink = styled.Link`
        text-decoration: none;
        text-align: center;
        font-size: 2rem;
        font-family: Inconsolata;
        color: white;
    `;
    */
    return (
        <>
            <Bar>
                <Link to="home">Home</Link>
                <Link to="shop">Shop</Link>
            </Bar>
            <Outlet/>
        </>
    )
}
