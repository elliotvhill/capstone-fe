import React, { useState, useEffect, useContext } from 'react'
import UserContext from '../UserContext'

const Login = () => {

    const { userInfo, setUserInfo } = useContext(UserContext)
    const [loggedIn, setLoggedIn] = useState(false)

    // function to handle submit
    const handleSubmit = (event) => {
        event.preventDefault()
        useEffect(() => {
            setUserInfo({ ...userInfo, [event.target.id]: event.target.value })
            console.log(userInfo)
            setLoggedIn(true)
            console.log(loggedIn)
        }, [loggedIn])
    }
    
        // function to handle change
        const handleChange = (event) => {
            setUserInfo({...userInfo, [event.target.id]: event.target.value})
        }





    return (
        <div className="login-container">
            <form className="login" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    type='text'
                    placeholder="Username"
                    id="username"
                    onChange={handleChange}
                    value={userInfo.username}
                />
                <label htmlFor="password">Password</label>
                <input
                    type='password'
                    placeholder="Password"
                    id="password"
                    onChange={handleChange}
                    value={userInfo.password}
                />
                <button type="submit">Log in</button>
            </form>
        </div>
    )
}

export default Login