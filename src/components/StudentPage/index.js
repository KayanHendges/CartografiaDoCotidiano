import React, { useState } from 'react';
import styled from 'styled-components'
import { ContentArea, ContentAreaContainer } from './contentArea';
import { Student } from './styles';
import './index.css';


export const StudentPage = props => {

    const [display, setDisplay] = useState ("none")

    const displayChange = (display) => {
        console.log(display)
        setDisplay(display)
    }

    const Ballon = styled.div`
        display: ${display};
        /* grid-area: balloon; */
        position: relative;
        margin-top: -300px;
        top: 390px;
        left: 60px;
    `;

    return (
        <ContentAreaContainer>
            <ContentArea 
            backgroundImage={"background-map.png"}
            backgroundPosition={"center top"}
            >
                <Ballon>
                        <img 
                        id="balloon"
                        alt={props.balloon}
                        src={props.balloon}
                        />
                </Ballon>   
                <Student>
                    <img 
                    id="name-card"
                    alt={props.name}
                    src={props.name}
                    />
                    
                    <img 
                    id="cartoon"
                    alt={props.cartoon}
                    src={props.cartoon}
                    onMouseEnter={() => displayChange("flex")}
                    onMouseLeave={() => displayChange("none")}
                    />
                    <img 
                    id="text-card"
                    alt={props.text}
                    src={props.text}
                    />
                </Student>
            </ContentArea>
        </ContentAreaContainer>
    )
}

export default StudentPage;