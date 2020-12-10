import React, { useState } from 'react';
import styled from 'styled-components';
import { ContentArea, ContentAreaContainer } from './ContentAreaContainer';

import button from '../../images/Team/conheca-equipe.png';
import unisociesc from '../../images/Team/unisociesc-color.png';
import team from '../../images/Team/equipe.png';



const Team = () => {

    const [displayButton, setDisplayButton] = useState ("flex")
    const [displayContent, setDisplayContent] = useState ("none")


    const changeDisplay = (display1, display2) => {
        setDisplayButton(display1)
        setDisplayContent(display2)
    }

    const Button = styled.div`
        display: ${displayButton};
        width: auto;
        height: 515px;
        justify-content: center;
        align-items: center;
        transition: height .3s;

        &:hover,
        &:focus {
            height: 545px;
            cursor: pointer;
        }
    `;

    const TeamContainer = styled.div`
        width: auto;
        height: 100%;
        display:flex;
        justify-content: center;
        align-items: center;
        margin-top: 200px;
    `;

    const TeamContent = styled.div`
        display: ${displayContent};
        max-width: 100%;
        max-height: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    `;

    const Text = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center
    `;

    Text.p = styled.p`
        font-family: sans-serif;
        font-size: 24px;
        color: white;
        margin: 10px;
    `;

    return (
        <ContentAreaContainer>
            <ContentArea 
            backgroundImage={"background-1.png"}
            backgroundPosition={"center top"}
            >
                <TeamContainer>
                    <Button>
                        <img
                        src={button}
                        alt="button"
                        style={{
                            width:'100%',
                            height: 'auto',
                        }}
                        onClick={() => changeDisplay("none", "flex")}
                        />
                    </Button>
                    <TeamContent>
                        <img
                        src={unisociesc}
                        alt="unisociesc"
                        style={{
                            width: '450px',
                            height: 'auto',
                            marginBottom: '20px',
                        }}
                        />
                        <img
                        src={team}
                        alt="equipe"
                        style={{
                            width: 'auto',
                            height: '280px'
                        }}
                        />
                        <Text>
                           <Text.p>CURSO: PEDAGOGIA</Text.p>
                           <Text.p>SEMESTRE: 2/2020</Text.p> 
                           <Text.p>UC: PSICOLOGIA E EDUCAÇÃO</Text.p> 
                        </Text>
                    </TeamContent>
                </TeamContainer>
            </ContentArea>
        </ContentAreaContainer>
    )
}

export default Team;