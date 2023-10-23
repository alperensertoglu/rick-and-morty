import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./index.scss"

function Characters() {
    const [characters, setCharacters] = useState([]);


    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then((response) => {
                setCharacters(response.data.results);


            })
            .catch((error) => {
                console.error(error);
            });
    }, []);



    return (

        <div className="App">
            {characters.map((character) => (
                <div className='article'>
                    <div className='img-div'><img src={character.image} alt={character.name}></img></div>
                    <div className='info'>
                        <div className='charName'>
                            <a href={character.id} rel='noreferrer' target='_blank'><h2> {character.name}</h2></a>
                            <span>{character.status} - {character.species}</span>
                        </div>
                        <div className='lastKnownLocation'>
                            <span className='text-gray'>Last known location:</span> <br />
                            <a href={character.url} target='_blank' rel='noreferrer'>{character.location.name}</a>
                        </div>
                        <div className='firstSeenIn'>
                            <span className='text-gray'>First seen in:</span><br/>
                            <a className='first' href={character.episode[0]} target='_blank' rel='noreferrer'>{character.episode[0].name}</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Characters;
