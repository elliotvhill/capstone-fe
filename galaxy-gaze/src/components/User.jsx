import React, { useState, useEffect, useContext } from "react"
import UserContext from "../UserContext"
import axios from "axios"

const User = () => {
    const { userInfo, setUserInfo } = useContext(UserContext)

    // get the userId of logged in user
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/get_user_id")
            .then((response) => {
                setUserId(response.data.user_id)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    console.log("User info:", userInfo)
    // display favorited/followed items associated w/ the id of the user

    return (
        <div className='user'>
            {userInfo.userId ? (
                <>
                    <p>User ID: {userInfo.userId}</p>
                    <h2>Welcome, {`${userInfo.username}`}</h2>
                    <div className='followed-items'>
                        {userInfo.followed_bodies &&
                        userInfo.followed_bodies.length > 0 ? (
                            userInfo.followed_bodies.map((body) => {
                                return (
                                    <div key={body.id}>
                                        <div className='body'>{body.name}</div>
                                    </div>
                                )
                            })
                        ) : (
                            <p className='no-faves'>No favorited items</p>
                        )}
                    </div>
                </>
            ) : (
                <p> Please sign in.</p>
            )}
        </div>
    )
}

export default User
