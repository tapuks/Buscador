
import PokemonListItem from "./PokemonListItem"

export default function PokemonList({pokemon}){

    return (
        <div>
            {pokemon?.map((value, index)=> ( 
               <PokemonListItem key={index} {...value}/>
            ))}
        </div>
    )

}