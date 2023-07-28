import React, { useState } from "react"
import axios from 'axios'
import { DEEP_SPACE_SEARCH_URL } from "../globals"

const SearchComponent = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [searchResults, setSearchResults] = useState([])


    const handleChange = (event) => {
        setSearchQuery(event.target.value)
    }

        const getDeepSpaceData = async (event) => {
            // disable search button while awaiting response to prevent dupe reqs
            try {
                const response = await axios.get(`http://localhost:8000/deepspaceobject/?term=${searchQuery}`) // testing local api endpoint for dev
                // const response = await axios.get(`${DEEP_SPACE_SEARCH_URL}${searchQuery}`) // actual astro api endpoint
                setSearchResults(response.data)
            } catch (error) {
                console.error("Error searching deep space:", error)
            }
        }
    
        const handleDeepSpaceSearch = async () => {
            // event.preventDefault()
            try {
                await getDeepSpaceData(searchQuery)
            } catch (error) {
                console.error("Error searching deep space:", error)
            }
        }


    const handleSubmit = (event) => {
        event.preventDefault()
        handleDeepSpaceSearch()
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
