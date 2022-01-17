
import { useContext, useEffect } from "react"
import PokemonContext from "../../context/pokemons"
import PokemonList from "./components/PokemonList"
import usePokemonStore from "../../zustand/stores/pokemonStore"
import shallow from "zustand/shallow"

const HomePokemon=()=> {
    // CONTEXT
    // const {getPokemons, pokemon} = useContext(PokemonContext)

    //STORE
    const {getPokemons, pokemon} = usePokemonStore(state => 
        ({getPokemons: state.getPokemons, pokemon: state.pokemon}), shallow) //con shallow no se renderiza el store si se renderiza algo de la pagina (siempre ponerlo)

    const {idPrueba} = usePokemonStore.getState() //Podemos acceder al store de esta manera, pero si se actualiza un valor no se nos va a actualizar
    console.log(idPrueba);
 



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