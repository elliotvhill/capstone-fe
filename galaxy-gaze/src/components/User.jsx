import React, { useState, useEffect, useContext } from 'react'
import UserContext from '../UserContext'
import axios from 'axios'

const User = () => {
    const { userInfo, setUserInfo } = useContext(UserContext)
    const [userId, setUserId] = useState([])

    // get the userId of logged in user

    useEffect(() => {
        axios.get('http://localhost:8000/api/get_user_id')
            .then(response => {
            setUserId(response.data.user_id)
            })
            .catch(error => {
            console.log(error)
        })
    }, [])

    // display favorited/followed items associated w/ the id of the user

    console.log('User info:', userInfo)
    // console.log('Followed bodies:', followed_bodies)
    console.log('User ID:', userId)

    return (
        <div className="user">
            {userId ? <p>User ID: {userId}</p> : <p>Loading...</p>}
            <h2>Welcome, {`${userInfo.username}`}</h2>
            <div className='followed-items'>
                {userInfo.followed_bodies && userInfo.followed_bodies.length > 0 ? (
                    userInfo.followed_bodies.map((body) => {
                    return (
                        <div key={body.id}>
                        <div className='body'>
                            {body.name}
                        </div>
                    </div>
                        )
                }) 
                    ) : (
                        <p className='no-faves'>No favorited items</p>
                )}
            </div>
        </div>
    )
}

export default User