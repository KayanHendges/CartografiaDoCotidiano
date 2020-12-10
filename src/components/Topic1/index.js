import React from 'react';
import { ContentArea, ContentAreaContainer } from '../ContentAreaContainer/styles';
import Text from '../../images/Topic1/text-1.png';

const Topic1 = () => {
    return (
        <ContentAreaContainer>
            <ContentArea 
            backgroundImage={"background-1.png"}
            backgroundPosition={"center top"}
            >
                <img
                    src={Text}
                    alt="Text"
                    style={{
                        width:'auto',
                        height: '300px',
                        margin: '150px 0 75px'
                    }}
                />
            </ContentArea>
        </ContentAreaContainer>
    )
}

export default Topic1;