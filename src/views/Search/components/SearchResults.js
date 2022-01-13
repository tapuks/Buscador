const SearchResults=({results, isSearching} )=> {


    return (
        
        <div style={{width:"100%",
                    padding: "0rem 2rem 0rem 2rem"
        }}>
            {!results?.length && isSearching && <p>No hay resultados</p>}
            {results?.map((value)=> (
                <div style={{
                    background: "#E8E7E7",
                    marginTop:"20px",
                    marginBottom:"20px",
                    padding:"10px"
                    }} key={value.id}>
                    <p>{value.name}</p>
                    <p>{value.email}</p>
                    <p>{value.phone}</p>

                </div>))}
        </div>
    )
}

export default SearchResults