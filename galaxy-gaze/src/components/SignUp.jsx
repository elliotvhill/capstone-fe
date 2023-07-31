import React, { useState, useEffect, useContext } from "react"
import UserContext from "../UserContext"
import { Link } from 'react-router-dom'
import axios from 'axios'

const SignUp = ({ loggedIn, setLoggedIn }) => {
    const { userInfo, setUserInfo } = useContext(UserContext)
    
    // function to handle change
    const handleChange = (event) => {
        setUserInfo({...userInfo, [event.target.id]: event.target.value})
    }

    // function to handle signup
    const handleSignUp = async (event) => {
        event.preventDefault()
        try {
            // setUserInfo({ ...userInfo, [event.target.id]: event.target.value })
            console.log(userInfo)
            console.log('created user')
            const response = await axios.post('http://127.0.0.1:8000/users/', userInfo, {
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ZWxsaW90aGlsbDpnYWxheHlnYXpl',
                }
            })
            console.log(response)
            setUserInfo({ user_email: '', username: '', user_password: '' })
        } catch (error) {
            console.log(error.response.data)
            setUserInfo({ user_email: '', username: '', user_password: '' })
        }

    }
    



    return (
        <div className='signup flex-col flex justify-center align-center items-center'>
            <h1 className='mt-3 mb-1 text-xl md:text-2xl font-semibold'>Sign up</h1>
            <form
                className='signup flex flex-col w-1/3'
                onSubmit={handleSignUp}
            >
                <label htmlFor='user_email' className='font-medium mt-4 mb-2'>
                    Enter an email address:
                </label>
                <input
                    type='text'
                    className='form-input mb-1 bg-gray-100 border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0 rounded-xl m-1'
                    placeholder='email@example.com'
                    id='user_email'
                    onChange={handleChange}
                    value={userInfo.user_email}
                />
                <label htmlFor='username' className='font-medium mt-4 mb-2'>
                    Enter a username:
                </label>
                <input
                    type='text'
                    className='form-input mb-1 bg-gray-100 border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0 rounded-xl m-1'
                    placeholder='username'
                    id='username'
                    onChange={handleChange}
                    value={userInfo.username}
                />
                <label htmlFor='user_password' className='font-medium mt-4 mb-2'>
                    Enter a password:
                </label>
                <input
                    type='password'
                    className='form-input mb-2 bg-gray-100 border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0 rounded-xl m-1'
                    placeholder='password'
                    id='user_password'
                    onChange={handleChange}
                    value={userInfo.password}
                />
                <button
                    type='submit'
                    className='border border-violet-500 hover:bg-spacecadet-400 rounded-full text-platinum-200 bg-violet-500 m-1 mt-4 p-1 font-semibold hover:border-spacecadet-400'
                >
                    Sign up
                </button>
            </form>
            <p className="mt-2 font-medium"> Already have an account? <Link to="/login" className='font-bold text-violet-400'>Login</Link>
            </p>
        </div>
    )
}

export default SignUp
