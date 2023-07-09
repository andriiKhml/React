import React from 'react';
import './simpson.css'
const Simpson = (props) => {
    let {name, surname, age, photo} = props
    return (
        <div className={'daf'}>
            <h2> {name} {surname} {age} </h2>
            <img src={photo} alt={'error'}/>
        </div>
    );
};

export default Simpson;