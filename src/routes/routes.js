
import { BrowserRouter as Router } from "react-router-dom";
import FourOrFour from "../views/404/Fourorfour";
import HomePokemon from "../views/Home Pokemon/HomePokemon";
import PokeDetail from "../views/pokeDetail/PokeDetail"
import ScrollToTop from "../components/ScrollToTop";
export default function Routes(){

    return (
        <Router>
                {/* <ScrollToTop/> */}
                <HomePokemon path="/"/>
                {/* <FourOrFour path= "/4"/> */}
                {/* <PokeDetail path = "/pokemon/:id"/> */}
          
        </Router>
    )

}