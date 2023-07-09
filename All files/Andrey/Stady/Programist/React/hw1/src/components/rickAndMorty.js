import React from 'react';

const RickAndMorty = (props) => {
    let {id, name, status, species, gender, image} = props
    return (
        <div>
            <h2> {id} {name} {status} {species} {gender} </h2>
            <img src={image} alt="error"/>
        </div>
    );
};

export default RickAndMorty;