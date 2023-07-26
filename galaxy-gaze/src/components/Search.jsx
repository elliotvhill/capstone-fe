import React, { useState } from "react"
import axios from 'axios'
import { BASE_URL, GEOCODE_SEARCH } from "../globals"

const SearchComponent = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [userCoords, setUserCoords] = useState([])

    // user types in city, state to search for deep space object in their loc
    const handleChange = (event) => {
        const query = event.target.value
        // save search query in state for later use
        setSearchQuery(query)
    }

    // user submits search query
    // pass to geocode api to convert to coords
        const handleSearch = async (event) => {
            event.preventDefault()
            try {
                // make api request passing searchQuery (address)
                const response = await axios.get(`${GEOCODE_SEARCH}${searchQuery}`)
                // return api response latitude
                const geoData = response.data
                const latitude = geoData[0].lat
                // return api response longitude
                const longitude = geoData[0].lon
                console.log("latitude: ", latitude, "longitude: ", longitude)
                const coordinates = `${latitude}, ${longitude}`
                // store coords in state -> coords
                console.log(coordinates)
                setUserCoords(coordinates)
            } catch (error) {
                console.error("Error getting coordinates:", error)
            }

        // pass coords state to be sent in astro api call
    }

        return (
            <div className='search'>
                <form onSubmit={handleSearch}>
                    <input
                        type='text'
                        value={searchQuery}
                        onChange={handleChange}
                        placeholder='Search for a deep space object...'
                    />
                    <button type='submit' className='submit-search'> Search </button>
                </form>
                <div className='results'>
                    <ul className='search-results'>
                        {/* {userCoords.map((result) => (
                            <li key={result.id}>{result.name}</li>
                        ))} */}
                        <li className="your-coords">The coordinates for that location are {userCoords}</li>
                    </ul>
                </div>
            </div>
        )
}
export default SearchComponent
