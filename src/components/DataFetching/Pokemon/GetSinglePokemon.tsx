import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

// const fetchPokemons = async ( pokemonId:number ) => {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
//     if(!response.ok) {
//         throw new Error('Error fetching Pokemon data')
//     } else {
//         console.log(response)
//     }
// }

const GetSinglePokemon = () => {
    return(
    <>
        <p>Hello World!</p>
        {/* {fetchPokemons(8)} */}
    </>
    )
}

export default GetSinglePokemon;