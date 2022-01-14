
import { useContext, useEffect } from "react"
import PokemonContext from "../../context/pokemons"
import PokemonList from "./components/PokemonList"


const HomePokemon=()=> {

    const {getPokemons, pokemon} = useContext(PokemonContext)


    useEffect(()=> {
        getPokemons().catch(null)

    },[])

    console.log(pokemon)

    return (
        <div>
            <PokemonList pokemon={pokemon}/>
        </div>)

}
export default HomePokemon