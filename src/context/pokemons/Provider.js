
import { useState } from "react"
import PokemonContext from "."
import LlamadaApi from "../../api/LlamadaApi"

const PokemonProvider=({children})=> {

    const [pokemon, setPokemon]=useState([])
    const [pokemonDetail, setPokemonDetail]=useState({})
    const [isLoading, setIsLoading]=useState(false)


    const getPokemons = async ()=> {
        try {
            setIsLoading(true)
            const resultPokemon = await LlamadaApi({url:'https://pokeapi.co/api/v2/pokemon?limit=100'})
            setPokemon(resultPokemon.results)
        }
        catch (error) {
            setPokemon([])
        }
        finally {
            setIsLoading(false)
        }
    }

    const getPokemonDetail = async (id)=> {
        if (!id) Promise.reject("Id es requerido")
        try{
            setIsLoading(true)
            const pokemonDetail = await LlamadaApi({url: `https://pokeapi.co/api/v2/pokemon/${id}`})
            setPokemonDetail(pokemonDetail)
        }catch (error) {
            setPokemonDetail({})
        }
        finally {
            setIsLoading(false)
        }
    }



    return (
        <PokemonContext.Provider value={{getPokemons, pokemon, getPokemonDetail, pokemonDetail, isLoading}}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider