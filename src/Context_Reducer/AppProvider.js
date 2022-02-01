import { createContext, useReducer } from "react"
import { useContext } from "react/cjs/react.development"

const AppContext = createContext()

// hooks
const useAppContext = () => {
    return useContext(AppContext)
}

const stateInitial = {
    productos: ['comida'],
    presupuesto: 500
}

const funcionReducer=(state, action)=> {
    console.log(action)
    return state
}

const AppProvider=({children})=> {

    const [state, dispatch]=useReducer(stateInitial, funcionReducer)

    return (
        <AppContext.Provider value={{presupuesto: state.presupuesto, productos: state.productos, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}

export {
    AppProvider,
    useAppContext
}