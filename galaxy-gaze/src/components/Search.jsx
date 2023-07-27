import React, { useState, useEffect, useRef } from "react"
import axios from 'axios'
import { BASE_URL, GEOCODE_SEARCH, DEEP_SPACE_SEARCH_URL } from "../globals"

const SearchComponent = () => {
    const [searchQuery, setSearchQuery] = useState("")
    // const [userCoords, setUserCoords] = useState([])
    const [searchResults, setSearchResults] = useState([])

    // useRef to maniuplate DOM
    // const ref = useRef(null)

    
    // user types in city, state to search for deep space object in their loc
    const handleChange = (event) => {
        const query = event.target.value
        // save search query in state for later use
        setSearchQuery(query)
    }
    
    //////////////////////////////////////////////
    
    // user submits search query for deep space object:
    // useEffect to let api call run & return results
    useEffect(() => {
        let isMounted = true // track component mount status
    
    // function to get deep space search results:
        const getDeepSpaceData = async (event) => {
            event.preventDefault()
            // disable search button while awaiting response to prevent dupe reqs
            try {
                const response = await axios.get(`http://localhost:8000/search-deep-space/?term=${searchQuery}`) // testing local api endpoint for dev
                // const response = await axios.get(`${DEEP_SPACE_SEARCH_URL}${searchQuery}`) // actual astro api endpoint
                if (isMounted) {
                    setSearchResults(response)
                }
            } catch (error) {
                console.error("Error searching deep space:", error)
            }
            // finally { re-enable search button }
        }
    
        const handleDeepSpaceSearch = async () => {
            // event.preventDefault()
            try {
                await getDeepSpaceData(searchQuery)
            } catch (error) {
                console.error("Error searching deep space:", error)
            }
        }
        // handleDeepSpaceSearch()

        // console.log(searchResults)
        // if (searchResults) {
        //     console.log('results found')
        //     ref.current
        // } else {
        //     console.log('no results')
        //     ref.current
        // }
        return () => {
            isMounted = false
        }
    }, [searchQuery])


    //////////////////////////////////////////////
    // user submits search query to find bodies in their location
    // pass to geocode api to convert to coords
    //     const handleSearch = async (event) => {
    //         event.preventDefault()
    //         try {
    //             // make api request passing searchQuery (address)
    //             const response = await axios.get(`${GEOCODE_SEARCH}${searchQuery}`)
    //             // return api response latitude
    //             const geoData = response.data
    //             const latitude = geoData[0].lat
    //             // return api response longitude
    //             const longitude = geoData[0].lon
    //             console.log("latitude: ", latitude, "longitude: ", longitude)
    //             const coordinates = `${latitude}, ${longitude}`
    //             // store coords in state -> coords
    //             console.log(coordinates)
    //             setUserCoords(coordinates)
    //         } catch (error) {
    //             console.error("Error getting coordinates:", error)
    //         }

    //     // pass coords state to be sent in astro api call
    // }

    // handle form submission
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
                    {/* <ul className='search-results'> */}
                        {/* {userCoords.map((result) => (
                            <li key={result.id}>{result.name}</li>
                        ))} */}
                        {/* <li className="your-coords">The coordinates for that location are {userCoords}</li> */}
                    {/* </ul> */}
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
