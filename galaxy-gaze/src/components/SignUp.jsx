import React, { useState, useEffect, useContext } from 'react'
import UserContext from '../UserContext'

const SignUp = ({ loggedIn, setLoggedIn }) => {

    const { userInfo, setUserInfo } = useContext(UserContext)
    return (
        <div className="sign-up flex justify-center align-center items-center">
            <h1 className='text-xl md:text-2xl font-semibold'>Sign up</h1>
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
                <button type="submit" className='border border-violet-500 hover:bg-spacecadet-400 rounded-full text-platinum-200 bg-violet-500 m-1 mt-2 p-1 font-semibold hover:border-spacecadet-400'>Sign up</button>
            </form>
        </div>
    )
}

export default SignUp