import { useAppContext } from "./AppProvider"

export default function List(){
    const {productos}= useAppContext()

    const list= 'La lista esta vacia'
    return (
        <>
            <p>{list}</p>
            <p>{productos}</p>
        </>
    )
}