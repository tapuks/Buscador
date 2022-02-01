
import { BrowserRouter as Router } from "react-router-dom";
import FourOrFour from "../views/404/Fourorfour";
import HomePokemon from "../views/Home Pokemon/HomePokemon";
import PokeDetail from "../views/pokeDetail/PokeDetail"
import ScrollToTop from "../components/ScrollToTop";
import PerrosContext from "../context prueba/PerrosContext";
import VistaPerros from "../views/VistaPerros"
import Form from "../Context_Reducer/Form";
import List from "../Context_Reducer/Lista";
import { AppProvider } from "../Context_Reducer/AppProvider";
import Presupuesto from "../Context_Reducer/Presupuesto";




export default function Routes(){

    const perrosData = {
        name:'Bambi',
        raza:'maltes'
    }

    return (
        <Router>
            <AppProvider>
            {/* <PerrosContext.Provider value={perrosData}> */}
                {/* <ScrollToTop/> */}
                {/* <HomePokemon path="/"/> */}
                <Presupuesto></Presupuesto>
                <Form></Form>
                <List></List>
                {/* <VistaPerros path="/"/> */}
                {/* <FourOrFour path= "/4"/> */}
                {/* <PokeDetail path = "/pokemon/:id"/> */}
                {/* </PerrosContext.Provider> */}
            </AppProvider>
        </Router>
    )

}