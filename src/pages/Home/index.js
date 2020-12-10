import React from 'react';
import { Body } from './styles';

import BannerMain from '../../components/BannerMain';
import Topic1 from '../../components/Topic1';
import StudentPresentation from '../Studente-presentation';
import Team from '../../components/Team/Index';
import Topic2 from '../../components/Topic2/index';


const Home = () => {
    return (
        <div>
            <Body>
                <BannerMain />
                <Topic1 /> {/*Um amor feito por...*/}
                <StudentPresentation />
                <Team />
                <Topic2 /> {/*Educar é compartilhar...*/}
            </Body>
        </div>
    )
}

export default Home;