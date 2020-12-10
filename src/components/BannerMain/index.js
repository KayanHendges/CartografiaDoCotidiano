import React from 'react';
import { ContentArea, ContentAreaContainer, } from './styles';
import WindRoses from '../../images/BannerMain/cartografia-do-cotidiano.png'

const BannerMain = () => {
    return (
        <ContentAreaContainer>
            <ContentArea >
                <img 
                src={WindRoses}
                alt='rosa-dos-ventos'
                style={{
                    width: "auto",
                    height: "500px"
                }}
                />
            </ContentArea>
        </ContentAreaContainer>
    )
}

export default BannerMain;
