import {useState} from 'react';

const SearchBox =()=> {
    const [searchText, setSearchText]=useState("")
    return (
        <div>
            <h1>Buscado de personal</h1>
            <label>
                <input value={searchText} onChange={({target: {value}})=> setSearchText(value)}></input>
            </label>
            <button>Bucar</button>
        </div>
        )
}

export default SearchBox