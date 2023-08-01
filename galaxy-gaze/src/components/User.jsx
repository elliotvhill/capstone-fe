import React, { useState, useEffect, useContext } from "react"
import UserContext from "../UserContext"
import axios from "axios"
import { Link } from 'react-router-dom'

const User = () => {
    const { userInfo, setUserInfo } = useContext(UserContext)

    // get the userId of logged in user
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/get_user_id")
            .then((response) => {
                // setUserId(response.data.user_id)
                setUserInfo(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    console.log("User info:", userInfo)

    // option for user to update info
        // button/link to call up user info form
        // fields for user information
        // user can change username and/or password
        // PUT axios request to UPDATE user info in DB


    // display favorited/followed items associated w/ the id of the user

    return (
        <div className='user'>
            {userInfo.userId ? (
                <>
                    {/* <p>User ID: {userInfo.userId}</p> */}
                    <h2 className="font-semibold text-xl mt-8">Welcome, {`${userInfo.username}!`}</h2>
                    <div className='followed-items'>
                        <h2 className="font-semibold mt-10"> Favorited objects: </h2>
                        {userInfo.followed_bodies &&
                        userInfo.followed_bodies.length > 0 ? (
                            userInfo.followed_bodies.map((body) => {
                                return (
                                    <div key={body.id} className='body'>
                                            <h3 className="font-semibold"> {body.name} </h3>
                                            <p> Distance from Earth: {body.distanceFromEarth} km </p>
                                            <p> Other info: {body.extra_info} </p>
                                    </div>
                                )
                            })
                        ) : (
                            <p className='no-faves'>No favorited items</p>
                        )}
                    </div>
                </>
            ) : (
                <p className="font-medium"> Please <Link to="/login" className='font-bold text-violet-400'>sign in</Link>.</p>
            )}
        </div>
    )
}

export default User
