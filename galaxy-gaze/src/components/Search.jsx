import React, { useState, useEffect } from "react"
import axios from 'axios'
import { BASE_URL, GEOCODE_SEARCH, DEEP_SPACE_SEARCH_URL } from "../globals"

const SearchComponent = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [loading, setLoading] = useState(false)

    const handleChange = (event) => {
        const query = event.target.value
        // save search query in state for later use
        setSearchQuery(query)
    }
    
    //////////////////////////////////////////////
    
    const getDeepSpaceData = async (event) => {
        setLoading(true)
        try {
            // const response = await axios.get(`${DEEP_SPACE_SEARCH_URL}${searchQuery}`) // actual astro api endpoint
            const response = await axios.get(`http://localhost:8000/search-deep-space/?term=${searchQuery}`) // testing local api endpoint for dev
            console.log(response.data)
            setSearchResults(response.data)
            } catch (error) {
                console.error("Error searching deep space:", error)
        } finally {
            setLoading(false)
        }
        }
        
        // const handleDeepSpaceSearch = async () => {
        //     try {
        //         await getDeepSpaceData(searchQuery)
        //     } catch (error) {
        //         console.error("Error searching deep space:", error)
        //     }
        // }

    // handle form submission
    const handleSubmit = (event) => {
        event.preventDefault()
        // handleDeepSpaceSearch()
        getDeepSpaceData()
    }

        return (
            <div className='search'>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        value={searchQuery}
                        onChange={handleChange}
                        placeholder='Search for a deep space object...'
                    />
                    <button type='submit' className='submit-search'> Search </button>
                </form>
                <div className='results'>
                    {searchResults ? (
                        searchResults.map((result) => (
                            <div key={result.id}>
                            <h4>{result.object_name}</h4>
                            <p>Type of object: {result.object_type}</p>
                            <p>Sub-type: {result.object_sub_type}</p>
                            <p>Ojbect position: {result.object_position}</p>
                        </div>
                        ))
                    ) : (
                        <p> No results found </p>
                    )}
                </div>
            </div>
        )
}
export default SearchComponent