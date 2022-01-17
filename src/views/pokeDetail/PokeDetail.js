import { useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import PokemonContext from "../../context/pokemons"
import PokeStats from "./components/PokeStats"
import Loading from  "../../components/Loading"



export default function PokeDetail(){
    const {getPokemonDetail, PokeDetail, isLoading} = useContext(PokemonContext)

    let {id}= useParams()
    useEffect(()=>{
        getPokemonDetail(id)
    },[])

    if (isLoading==true) {
        <Loading title='Cargando pokemon...'/>
    }

    return (

        <div>
            <p>Name: {PokeDetail?.name}</p>
            <p>{`Peso: ${PokeDetail?.peso}`}</p>
            {/* <PokeStats stats = {PokeDetail.stats?? []} /> */}
        </div>
    )


}