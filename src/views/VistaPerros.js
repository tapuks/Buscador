import usePerros from "../context prueba/hooks/usePerros"


export default function VistaPerros() {
    const perros= usePerros()
    const {name, raza}= usePerros()

    console.log(perros)

    
    return (
        <> 
            <h1>Perros</h1>
            <h2>{name}</h2>
            <h2>{raza}</h2>

        </>
    )
}