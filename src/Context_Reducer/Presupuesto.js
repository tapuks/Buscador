import { useContext } from "react/cjs/react.development"
import { useAppContext } from "./AppProvider"
export default function Presupuesto() {

    const {presupuesto} = useAppContext()
    console.log(useAppContext())
    return (
        <>
         <h1>Presupuesto {presupuesto}</h1>

        </>
       
    )
}