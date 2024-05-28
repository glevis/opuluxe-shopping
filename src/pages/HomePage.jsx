import image from '../assets/pexels-bohlemedia-1884583.png'
import styled from 'styled-components';


export default function HomePage() {
    const Content = styled.div`
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    `
    const HeroImage = styled.div`
        background-image: url(${image});
        width: 100%;
        height: 20em;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 60%;
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    const Text = styled.h1`
        background: url(${image});
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 100%;
        background-position: 50% 60%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
        font-size: 15em;
        filter: invert(1);
        user-select: none;
    `;
    return (
        <>
        <Content>
            <HeroImage>
                <Text>
                    Opuluxe
                </Text>
            </HeroImage>
        </Content>
        </>
    )
}
