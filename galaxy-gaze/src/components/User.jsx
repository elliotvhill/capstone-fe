import React, { useState, useEffect, useContext } from 'react'
import UserContext from '../UserContext'
import axios from 'axios'

const User = () => {
    const { userInfo, setUserInfo } = useContext(UserContext)
    const [userId, setUserId] = useState([])

    // get the userId of logged in user

    useEffect(() => {
        axios.get('/api/get_user_id')
            .then(response => {
            setUserId(response.data.user_id)
            })
            .catch(error => {
            console.log(error)
        })
    }, [])

    // display favorited/followed items associated w/ the id of the user

    const followed_bodies = userInfo.followed_bodies
    const followed_events = userInfo.followed_events

    return (
        <div className="user">
            {userId ? <p>User ID: {userId}</p> : <p>Loading...</p>}
            <h2>Welcome, {`${userInfo.username}`}</h2>
            <div className='followed-items'>
                {followed_bodies ?
                    (followed_bodies.map((body) => {
                        <div key={body.id}>
                            <div className='body'>
                                {followed_bodies.body.name}
                            </div>
                        </div>
                }) 
                    ) : (
                        <p className='no-faves'>No favorited items</p>
                )}
            </div>
        </div>
    )
}

export default User