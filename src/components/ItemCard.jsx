import styled from 'styled-components';

const Card = styled.div`
        border: solid black;  
        background-image: url(${props => props.$background});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        background-color: white;
    `;

export default function ItemCard({image}) {
    return (
        <Card $background={image}/>
    )
}
