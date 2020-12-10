import React, { useState } from 'react';
import styled from 'styled-components';
import circle from '../../images/Topic2/circle-button.png';
import './index.css'

export const CircleButton = props => {

    const [display, setDiplay] = useState ("flex")
    
    const changeDisplay = (display) => {
        setDiplay(display)
    }


    const Button = styled.div`
        transition: opacity .3s;

    &:hover,
    &:focus {
        opacity: 0.8;
        cursor: pointer;
    }
    `;

    return (
        <Button>
            <img 
            id="button"
            src={circle}
            alt={circle}
            style={{
                width: `${props.width}`,
                height: 'auto',
                display: `${display}`
            }}
            onClick={() => changeDisplay("none")}
            />
        </Button>
    )
}

export default CircleButton;