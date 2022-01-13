import BuscarCaja from "./components/BuscarCaja"
import FetchPost from "./components/fetchPost"

const Buscar=()=> {
    return (
    <div>
        {/* PASAMOS UNA FUNCION POR PROPS CON ARGUMENTO, ASI NOS DARAN EL DATO DEL ARGUMENTO Y LO PODEMOS USAR AQUI  */}
        {/* <BuscarCaja buscar={(parametro)=>alert(parametro)}/> */}
        <FetchPost url={"https://swapi.dev/api/people/1"}/>
    </div>)

}
export default Buscar