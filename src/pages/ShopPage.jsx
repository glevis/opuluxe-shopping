import ItemCard from "../components/ItemCard"
import styled from 'styled-components';
import {useEffect, useState} from 'react';

const Content = styled.div`
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

const ItemGrid = styled.div`
        margin-top: 20em;
        width: 80%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
    `;

export default function ShopPage() {
    const [ItemCards, setItemCards] = useState(null);
    useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then( products => {
                setItemCards(products.map((product) => {
                    return <ItemCard key={product.id} image={product.image}/>;
                }))
            }
            )
            .catch(function(err) {
                console.log(`TODO: Error handling. ${err}`);
            });
    }, []);

    return (
        <>
            <Content>
            <ItemGrid>
                {ItemCards}
            </ItemGrid>
            </Content>
        </>
    )
}
