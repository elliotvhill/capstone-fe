import React, { useState, useContext } from 'react'

const Login = () => {

    const initialState = {
        username: '',
        password: ''
    }
    const [formState, setFormState] = useState(initialState)
    const [loggedIn, setLoggedIn] = useState(false)

    // function to handle submit
    const handleSubmit = (event) => {
        event.preventDefault()
        setFormState({ ...formState, [event.target.id]: event.target.value })
        console.log(formState)
        setLoggedIn(true)
        console.log(loggedIn)
        setFormState(initialState)
    }
    
        // function to handle change
        const handleChange = (event) => {
            setFormState({...formState, [event.target.id]: event.target.value})
        }





    return (
        <div className="login">
            <form className="login" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    type='text'
                    placeholder="Username"
                    id="username"
                    onChange={handleChange}
                    value={formState.username}
                />
                <label htmlFor="password">Password</label>
                <input
                    type='password'
                    placeholder="Password"
                    id="password"
                    onChange={handleChange}
                    value={formState.password}
                />
                <button type="submit">Log in</button>
            </form>
        </div>
    )
}

export default Login