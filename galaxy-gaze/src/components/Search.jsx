import React, { useState, useEffect, useContext } from "react"
import UserContext from "../UserContext"
import axios from "axios"
import { DEEP_SPACE_SEARCH_URL } from "../globals"


const SearchComponent = ({ loggedIn, setLoggedIn, userInfo, setUserInfo }) => {
    const [searchQuery, setSearchQuery] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [loading, setLoading] = useState(false)

    const applicationId = import.meta.env.ASTRO_APP_ID
    const applicationSecret = import.meta.env.ASTRO_APP_SECRET
    const AUTH_STR = btoa(`${applicationId}:${applicationSecret}`)

    // const options = {
    // method: 'GET',
    // // url: 'https://api.astronomyapi.com/api/v2/search/',
    // params: {term: `${searchQuery}`, match_type: 'fuzzy', limit: '10', offset: '0'},
    // headers: {
    //     Accept: '*/*',
    //     Authorization: `Basic ${AUTH_STR}`
    // }
    // };

    const handleChange = (event) => {
        setSearchQuery(event.target.value)
    }

    const getDeepSpaceData = async () => {
        setLoading(true)
        console.log(searchQuery)
        try {
            // const response = await axios.get('https://api.astronomyapi.com/api/v2/search/', options)
            // const response = await axios.get(`https://galaxygaze.netlify.app/${searchQuery}`) // <-- netlify delpoyment
            const response = await axios.get(
                `http://localhost:8000/deepspaceobject/search/?term=${searchQuery}`
            ) // <-- just searches existing db in django admin -> testing local api endpoint for dev
            console.log(response.data)
            setSearchResults(response.data)
        } catch (error) {
            console.error("Error searching deep space:", error)
        } finally {
            setLoading(false)
            setSearchQuery('')
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        getDeepSpaceData()
    }


    const handleFavorite = (event) => {
        setUserInfo({...userInfo, [event.target.id]: event.target.value})
    }
    const saveFavorite = async (event) => {
        // loggedIn === true ?
            // get object ID
            // let objectId = searchResults.object.id
            // get user ID
            let userId = userInfo.id

            // searchResults.map((result) => {
            // add object id to followed_bodies array in userInfo
                try {
                    // axios post to user model in db
                    // const response = await axios.post(`http://127.0.0.1:8000/users/${userId}`, userInfo, {
                    const response = await axios.post(`http://127.0.0.1:8000/users`, userInfo, {
                        headers: {
                            'Accept': '*/*',
                            'Content-Type': 'application/json',
                            'Authorization': 'Basic ZWxsaW90aGlsbDpnYWxheHlnYXpl',
                        }
                    })
                    handleFavorite()
                    console.log('favorited object id: ', objectId)
                    // setUserInfo({ followed_bodies })
                } catch (error) {
                    console.log(error.response.data)
                }
    }
            // )
            // get ID of object
            // post to followed_objects in user model
            
    // }

    return (
        <div className='search'>
            <form onSubmit={handleSubmit} className="space-x-4 md:text-base lg:text-base text-sm">
                <input
                    type='text'
                    value={searchQuery}
                    onChange={handleChange}
                    placeholder='Search for a deep space object...'
                    className='w-1/2 rounded-2xl bg-gray-100 focus:ring-0 mt-4 md:mt-2'
                />
                <button
                    type='submit'
                    className='submit-search w-1/6 border text-spacecadet-400 border-violet-500 rounded-full hover:border-violet-400 hover:text-platinum-200 hover:bg-violet-400 p-2 font-semibold'
                >
                    {" "}
                    Search{" "}
                </button>
            </form>
            <div className='results'>
                {loading ? (
                    <p> Loading... </p>
                ) : searchResults ? (
                    searchResults.map((result) => (
                        <div key={result.id}
                        className="flex flex-col space-y-2 m-8">
                            <h4 className='object-name flex justify-center font-semibold'>
                                {result.object_name}
                            </h4>
                            <p className='object-type'>
                                Type of object: {result.object_type}
                            </p>
                            <p className='object-sub-type'>
                                Sub-type: {result.object_sub_type}
                            </p>
                            <p className='object-position-ra'>
                                Right Ascension: {result.object_position_ra}
                            </p>
                            <p className='object-position-dec'>
                                Declination: {result.object_position_dec}
                            </p>
                            <button onClick={saveFavorite} key={result.id} className="m-3 mt-3 p-2 font-medium rounded-full bg-greenyellow-200">Favorite</button>
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
