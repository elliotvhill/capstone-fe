import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div className='nav flex-row space-x-4 text-xl md:text-2xl font-medium my-3'>
            <Link
                to='/'
                className='text-greenyellow-700 hover:drop-shadow-[0px_2px_3px_var(--tw-shadow-color)] hover:shadow-greenyellow-200'
            >
                Home
            </Link>
            <Link
                to='/search'
                className='text-greenyellow-700 hover:drop-shadow-[0px_2px_3px_var(--tw-shadow-color)] hover:shadow-greenyellow-200'
            >
                Search
            </Link>
            <Link
                to='/user'
                className='text-greenyellow-700 hover:drop-shadow-[0px_2px_3px_var(--tw-shadow-color)] hover:shadow-greenyellow-200'
            >
                Account
            </Link>
            <Link
                to='/login'
                className='text-greenyellow-700 hover:drop-shadow-[0px_2px_3px_var(--tw-shadow-color)] hover:shadow-greenyellow-200'
            >
                Log In
            </Link>
            <Link
                to='/signup'
                className='text-greenyellow-700 hover:drop-shadow-[0px_2px_3px_var(--tw-shadow-color)] hover:shadow-greenyellow-200'
            >
                Sign Up
            </Link>
        </div>
    )
}

export default Nav
