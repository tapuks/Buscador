import {useState} from 'react';
import "./style.css"

const SearchBox =({onSearch, onClose, isSearching})=> {
    const [searchText, setSearchText]=useState("")

    const handleSearchClick=()=> {
        onClose()
        setSearchText("")
    }

    return (
        <div className='search-box-contain'>
            <h1 className='search-box-title'>Buscado de personal</h1>
            <div className='search-box-buttons'>
                <label>
                    <input value={searchText}
                    onChange={({target: {value}})=> setSearchText(value)}
                    className='search-box-input'></input>
                </label>
                <button onClick={()=>onSearch(searchText)} disabled={!searchText.length}>Bucar</button>
                {isSearching && <button onClick={handleSearchClick} disabled={!searchText.length}>Cerrar</button>}
            </div>
        </div>
        )
}

export default SearchBox