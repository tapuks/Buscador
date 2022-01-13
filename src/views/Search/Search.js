
import { useState } from "react"
import SearchBox from "./components/SearchBox"
import data from "../../data/users.json"
import SearchResults from "./components/SearchResults"
const Search=()=> {
   
    const [isAtTop, setIsAtTop] = useState(false)
    const [results, setResults] = useState([])


    const handleClose=()=> {
        setIsAtTop(false)
        setResults([])
    }
    const handleSearchClick=(searchText)=>{
        setIsAtTop(true)
        let searchTextMinuscula = searchText.toLowerCase()
        if (data?.length) {
            const filterData = data.filter((value)=> {
                return(
                    value.name.toLowerCase().includes(searchTextMinuscula) ||
                    value.phone.toLowerCase().includes(searchTextMinuscula)||
                    value.email.toLowerCase().includes(searchTextMinuscula)||
                    value.username.toLowerCase().includes(searchTextMinuscula)


                )
            })
            setResults(filterData)
            
        }
    }

    console.log(results)

    return(
        <div className={`search-contain ${isAtTop ? "search-contain--top" : "search-contain--center"}`}>
            <SearchBox onSearch={handleSearchClick}
            onClose={handleClose} 
            isSearching={isAtTop}/>
            <SearchResults results= {results} isSearching={isAtTop}/>
        </div>
    )
}

export default Search