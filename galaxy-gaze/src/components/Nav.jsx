import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <div className='nav'>
            <Link to='/'>Home</Link>
            <Link to='/search'>Search</Link>
            <Link to='/user'>Account</Link>
            <Link to='/login'>Log In</Link>
        </div>
    )
}

export default Nav