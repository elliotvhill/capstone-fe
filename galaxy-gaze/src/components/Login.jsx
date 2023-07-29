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
                    className='form-input bg-gray-100 border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0 rounded-full m-1'
                    placeholder="username"
                    id="username"
                    onChange={handleChange}
                    value={userInfo.username}
                    />
                <label htmlFor="password">Password</label>
                <input
                    type='password'
                    className='form-input bg-gray-100 border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0 rounded-full m-1'
                    placeholder="password"
                    id="password"
                    onChange={handleChange}
                    value={userInfo.password}
                />
                <button type="submit" className='btn border-gray-400'>Log in</button>
            </form>
        </div>
    )
}

export default Login