import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <div className='nav flex-row space-x-4 text-xl md:text-2xl font-medium my-3'>
            <Link to='/' className='text-greenyellow-600 hover:shadow-2xl hover:shadow-white-500/50'>Home</Link>
            <Link to='/search' className='text-greenyellow-600'>Search</Link>
            <Link to='/user' className='text-greenyellow-600'>Account</Link>
            <Link to='/login' className='text-greenyellow-600'>Log In</Link>
        </div>
    )
}

export default Nav