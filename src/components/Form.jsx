import React, {useState} from 'react'
import axios from 'axios'


const Form = () => {
    const [pokemons, setPokemons] = useState([])

    const fetchPokemons = (e) => {
        e.preventDefault()

        // implement axios api call
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")

            .then(finalResponse => setPokemons(finalResponse.data.results))

            .catch(error => console.log(error))
    }

    return (
        <fieldset>
            <div>
                <button onClick={fetchPokemons} className='Btn'>Fetch Pokemon</button>
            </div>
            <div>
            {
                pokemons.map((pokemon) => {
                    return (

                        (pokemon) ?
                        <>
                            <h2>{pokemon.name}</h2>

                        </> : <h1>Fetching Pokemons.....</h1>
                    )
                })
            }
            </div>
        </fieldset>
    )
}

export default Form