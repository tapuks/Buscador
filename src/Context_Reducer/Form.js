import { useState } from "react"
import { useAppContext } from "./AppProvider"

export default function Form(){
    const {dispatch} = useAppContext()
    const [name, setName]= useState('')
    const [precio, setPrecio]= useState(0)

    const submit=(e)=> {
        e.preventDefault()
        const producto= {
            name:name,
            precio:precio
        }
        dispatch({
            type: 'ADD_PRODUCTO',
            value: producto
        })
    }
    return (
        <>
            <form>
                <input onClick={(e)=>setName(e.target.value)} placeholder="name"></input>
                <input onClick={(e)=>setPrecio(e.target.value)} placeholder="precio"></input>

                <button type="submit" onClick={submit}> Enviar</button>
            </form>
        </>
    )
}