import create from "zustand";
import LlamadaApi from "../../api/LlamadaApi";

const usePokemonStore = create((set, get )=> ({
    getPokemons: async ()=> {
        try {
            set({isLoading : false})
            // setIsLoading(true)
            const resultPokemon = await LlamadaApi({url:'https://pokeapi.co/api/v2/pokemon?limit=100'})
            set({pokemon: resultPokemon.results})
        }
        catch (error) {
            set({pokemon :[]})
        }
        finally {
            set({isLoading : false})

        }
    },

    isLoading: false,
    pokemon: [],
    idPrueba : 35


}))

export default usePokemonStore
