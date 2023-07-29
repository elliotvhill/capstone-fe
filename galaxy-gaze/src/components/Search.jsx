import React, { useState, useEffect, useRef } from "react"
import axios from 'axios'
import { DEEP_SPACE_SEARCH_URL } from "../globals"

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
            const response = await axios.get(`${DEEP_SPACE_SEARCH_URL}${searchQuery}`)
            // const response = await axios.get(`https://galaxygaze.netlify.app/${searchQuery}`) // <-- netlify delpoyment
            const response = await axios.get(`http://localhost:8000/deepspaceobject/search/?term=${searchQuery}`) // <-- just searches existing db in django admin -> NOT what we want // testing local api endpoint for dev
            console.log(response.data)
            setSearchResults(response.data)
            } catch (error) {
                console.error("Error searching deep space:", error)
        } finally {
            setLoading(false)
        }
        }

    const handleSubmit = (event) => {
        event.preventDefault()
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
                    {loading ? (
                        <p> Loading... </p>
                    ) : searchResults ? (
                        searchResults.map((result) => (
                            <div key={result.id}>
                            <h4 className="object-name">{result.object_name}</h4>
                            <p className="object-type">Type of object: {result.object_type}</p>
                            <p className="object-sub-type">Sub-type: {result.object_sub_type}</p>
                            <p className="object-position-ra">Right Ascension: {result.object_position_ra}</p>
                            <p className="object-position-dec">Declination: {result.object_position_dec}</p>
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