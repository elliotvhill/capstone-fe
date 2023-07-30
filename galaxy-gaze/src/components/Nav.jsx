import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <div className='nav flex-row space-x-4 text-2xl font-medium my-3'>
            <Link to='/' className='text-greenyellow-500'>Home</Link>
            <Link to='/search' className='text-greenyellow-500'>Search</Link>
            <Link to='/user' className='text-greenyellow-500'>Account</Link>
            <Link to='/login' className='text-greenyellow-500'>Log In</Link>
        </div>
    )
}

export default Nav