import React, { useState, useEffect } from "react"
import axios from 'axios'
import { BASE_URL, DEEP_SPACE_SEARCH_URL } from "../globals"

const SearchComponent = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [loading, setLoading] = useState(false)

    const handleChange = (event) => {
        setSearchQuery(event.target.value)
    }
    
    const getDeepSpaceData = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`${DEEP_SPACE_SEARCH_URL}${searchQuery}`) // actual astro api endpoint
            // const response = await axios.get(`http://localhost:8000/search-deep-space/?term=${searchQuery}`) // testing local api endpoint for dev
            console.log(response.data)
            setSearchResults(response.data)
            } catch (error) {
                console.error("Error searching deep space:", error)
        } finally {
            setLoading(false)
        }
        }

    const handleSubmit = async (event) => {
        event.preventDefault()
        await getDeepSpaceData()
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
                    {loading ? (
                        <p> Loading... </p>
                    ) : searchResults ? (
                        searchResults.map((result) => (
                            <div key={result.id}>
                            <h4>{result.name}</h4>
                            <p>Type of object: {result.type}</p>
                            <p>Sub-type: {result.subType}</p>
                            <p>Ojbect position: {result.position}</p>
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