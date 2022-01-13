import PropTypes from "prop-types"
import { useEffect, useState } from "react";


const FetchPost=(props)=> {

    const [data, setData]=useState(undefined)
    console.log(props.url)

    useEffect(()=> {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch(props.url, requestOptions)
            .then(response => response.json())
            .then(result => {
                setData(result)
                console.log(result)
            })
            .catch(error => console.log('error', error));

    },[])


    return <>
        {data!== undefined &&
        data.name
        
}

    </>

}

export default FetchPost

FetchPost.propTypes = {
    url: PropTypes.string
}
