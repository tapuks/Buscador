
import './App.css';
// import Search from './views/Search/Search';
import Buscar from './views2/buscar/Buscar';
import PokemonProvider from './context/pokemons/Provider';
import HomePokemon from './views/Home Pokemon/HomePokemon';

import Layout from "./routes/routes"
import Routes from "./routes/routes"

function App() {

  return (
    <PokemonProvider>
      <Routes/>
    </PokemonProvider>

  )

}

export default App;
