import React from 'react';
import { StudentPage } from '../../components/StudentPage';
import estudantes from '../../data/estudantes.json'; 

const StudentPresentation = () => {
    return (
        <div>
            <StudentPage 
                name={estudantes.estudantes[0].name}
                text={estudantes.estudantes[0].bio}
                cartoon={estudantes.estudantes[0].cartoon}
                balloon={estudantes.estudantes[0].balloon} 
                />
                <StudentPage 
                name={estudantes.estudantes[1].name}
                text={estudantes.estudantes[1].bio}
                cartoon={estudantes.estudantes[1].cartoon}
                balloon={estudantes.estudantes[1].balloon} 
                />
                <StudentPage 
                name={estudantes.estudantes[2].name}
                text={estudantes.estudantes[2].bio}
                cartoon={estudantes.estudantes[2].cartoon}
                balloon={estudantes.estudantes[2].balloon} 
                />
                <StudentPage 
                name={estudantes.estudantes[3].name}
                text={estudantes.estudantes[3].bio}
                cartoon={estudantes.estudantes[3].cartoon}
                balloon={estudantes.estudantes[3].balloon} 
                />
        </div>
    )
}

export default StudentPresentation;