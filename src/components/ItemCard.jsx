import styled from 'styled-components';

export default function ItemCard() {
    const Content = styled.div`
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    `
    const ItemGrid = styled.div`
        margin-top: 20em;
        width: 80%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
    `;
    const ItemCard = styled.div`
        border: solid black;  
    `;

    const items = ["1", "2", "3", "4", "5", "6", "7", "8"];
    const ItemCards = items.map((item) => 
        <ItemCard key={item}/> 
    );
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
