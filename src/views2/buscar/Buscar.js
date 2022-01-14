import BuscarCaja from "./components/BuscarCaja"
import FetchPost from "./components/fetchPost"
import { useContext, useEffect } from "react"
import PokemonContext from "../../context/pokemons"


const Buscar=()=> {

    const {getPokemons, pokemon} = useContext(PokemonContext)


    useEffect(()=> {
      getPokemons().catch(null)

    },[])

    console.log(pokemon)

    return (
    <div>
        {/* PASAMOS UNA FUNCION POR PROPS CON ARGUMENTO, ASI NOS DARAN EL DATO DEL ARGUMENTO Y LO PODEMOS USAR AQUI  */}
        <BuscarCaja buscar={(parametro)=>alert(parametro)}/>
    </div>)

}
export default Buscar