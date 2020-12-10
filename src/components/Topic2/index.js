import React, { useState } from 'react';
import { ContentAreaContainer, ContentArea } from '../StudentPage/contentArea';
import CircleButton from '../CircleButton'
import { Content } from './styles'
import title from '../../images/Topic2/title.png'
import './styles';

export const Topic2 = () => {

    const [displayButton, setDisplayButton] = useState ("flex")
    const [displayContent, setDisplayContent] = useState ("none")

    const changeDisplay = (display1, display2) => {
        setDisplayButton(display1)
        setDisplayContent(display2)
    }

    return (
        <ContentAreaContainer>
            <ContentArea
            backgroundImage={"background-map.png"}
            backgroundPosition={"center"}
            >
                <Content>
                    <img
                    id="title"
                    src={title}
                    alt={title}
                    />
                    <CircleButton
                    width="150px"
                    onClick={() => changeDisplay("flex")}
                    />
                    
                </Content>
            </ContentArea>
        </ContentAreaContainer>
    )
}

export default Topic2;