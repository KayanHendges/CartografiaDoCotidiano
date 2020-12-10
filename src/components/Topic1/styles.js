import styled from 'styled-components';

export const ContentAreaContainer = styled.div`
    height: auto;
    width: 100%;

    @media (max-width: 800px) {
        height: 100vh;
    }
`;

export const ContentArea = styled.div`
    height: 100%;
    width: 100%;

    background-image: url(background-map.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 65px 0px 45px;
    
    @media (max-width: 800px) {
        padding: 0px 0px 0px;
    }
`;
