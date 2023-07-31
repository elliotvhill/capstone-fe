import React, { useState, useEffect, useContext } from 'react'
import UserContext from '../UserContext'
import SignUp from './SignUp'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Login = ({ loggedIn, setLoggedIn }) => {
    const { userInfo, setUserInfo } = useContext(UserContext)
    
    // function to handle change
    const handleChange = (event) => {
        setUserInfo({...userInfo, [event.target.id]: event.target.value})
    }
    
    // function to handle submit
    const handleSubmit = async (event) => {
        event.preventDefault()
        setUserInfo({ ...userInfo, [event.target.id]: event.target.value })
        try {
            // does userInfo exist in DB ?
            ///// get users from DB
            const response = await axios.get('http://127.0.0.1:8000/users/', userInfo, {
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ZWxsaW90aGlsbDpnYWxheHlnYXpl',
                }
            })


            ///// map through users in DB
            ///// does username match a username
                    // log in 
                    console.log(userInfo)
                    setLoggedIn(true)
                    console.log(loggedIn)
                    setUserInfo({ username: '', user_password: '' })
            // else error -> sign up
            
            // userInfo ? 

        } catch (error) {
            console.log(error.response.data)
            setUserInfo({ username: '', user_password: '' })
        }
    }
    


    return (
        <div className="login-container flex flex-col justify-center align-center items-center">
            <h1 className='mt-3 mb-1 text-xl md:text-2xl font-semibold'>Login</h1>
            <form className="login flex flex-col w-1/3" onSubmit={handleSubmit}>
                <label htmlFor="username" className='font-medium mt-4 mb-2'>Username:</label>
                <input
                    type='text'
                    className='form-input mb-1 bg-gray-100 border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0 rounded-xl m-1'
                    placeholder="username"
                    id="username"
                    onChange={handleChange}
                    value={userInfo.username}
                    />
                <label htmlFor="user_password" className='font-medium mt-4 mb-2'>Password:</label>
                <input
                    type='password'
                    className='form-input mb-2 bg-gray-100 border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0 rounded-xl m-1'
                    placeholder="password"
                    id="user_password"
                    onChange={handleChange}
                    value={userInfo.user_password}
                />
                <button type="submit" className='border border-violet-500 hover:bg-spacecadet-400 rounded-full text-platinum-200 bg-violet-500 m-1 mt-4 p-1 font-semibold hover:border-spacecadet-400'>Log in</button>
            </form>
                <p className="mt-2 font-medium"> Don't have account? <Link to="/signup" className='font-bold text-violet-400'>Sign up</Link>
            </p>
        </div>
    )
}

export default Login