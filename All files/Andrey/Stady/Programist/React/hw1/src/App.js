import React from 'react';
import Simpson from "./components/simpson";
import rickAndMorty from "./components/rickAndMorty";
import RickAndMorty from "./components/rickAndMorty";
const App = () => {
    return (
        <div>
        <Simpson name={'bart'} surname={'afsa'} age={12} photo={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'} />
        <RickAndMorty id={289} name={'Rick D716-C'} status={'Alive'} species={'Human'} gender={'Male'} image={'https://rickandmortyapi.com/api/character/avatar/289.jpeg'} />
        </div>

    );
};

export default App;