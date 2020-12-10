import styled from 'styled-components';

export const ContentAreaContainer = styled.div`
    /* height: 100vh; */
    width: 100%;

    @media (max-width: 800px) {
        height: 100vh;
    }
`;

export const ContentArea = styled.div`
    /* height: 100vh; */
    width: 100%;
    background-image: ${props => `url(${props.backgroundImage})`};
    background-repeat: no-repeat;
    background-position: ${props => `${props.backgroundPosition}`};
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
