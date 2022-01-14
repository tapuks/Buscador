
import { useState } from "react"
import PokemonContext from "."
import LlamadaApi from "../../api/LlamadaApi"

const PokemonProvider=({children})=> {

    const [pokemon, setPokemon]=useState([])

    const getPokemons = async ()=> {
        try {
            const resultPokemon = await LlamadaApi({url:'https://pokeapi.co/api/v2/pokemon?limit=100'})
            setPokemon(resultPokemon.results)
        }
        catch (error) {
            setPokemon([])

        }
    }



    return (
        <PokemonContext.Provider value={{getPokemons, pokemon}}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider