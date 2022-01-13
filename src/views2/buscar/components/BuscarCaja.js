import PropTypes from "prop-types"

const BuscarCaja = props => {
  
    
    return(
        <div>
            
            
            <button onClick={()=>props.buscar("naaa")}>Buscar</button>
        </div>
    )
}

export default BuscarCaja

BuscarCaja.propTypes = {
    buscar: PropTypes.string
}

