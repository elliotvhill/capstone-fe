import React, { useState, useEffect, useContext } from 'react'
import UserContext from '../UserContext'
import Register from './Register'

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
        <div className="login-container flex justify-center align-center items-center">
            <form className="login flex flex-col w-1/3" onSubmit={handleSubmit}>
                <label htmlFor="username" className='font-medium'>Username</label>
                <input
                    type='text'
                    className='form-input bg-gray-100 border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0 rounded-xl m-1'
                    placeholder="username"
                    id="username"
                    onChange={handleChange}
                    value={userInfo.username}
                    />
                <label htmlFor="password" className='font-medium'>Password</label>
                <input
                    type='password'
                    className='form-input bg-gray-100 border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0 rounded-xl m-1'
                    placeholder="password"
                    id="password"
                    onChange={handleChange}
                    value={userInfo.password}
                />
                <button type="submit" className='border text-spacecadet-400 border-violet-500 rounded-full hover:border-violet-400 hover:text-platinum-200 hover:bg-violet-400 m-1 mt-3 p-1 font-semibold'>Log in</button>
                <button type="submit" className='border border-violet-500 hover:bg-spacecadet-400 rounded-full text-platinum-200 bg-violet-500 m-1 mt-2 p-1 font-semibold hover:border-spacecadet-400'>Register</button>
            </form>
        </div>
    )
}

export default Login