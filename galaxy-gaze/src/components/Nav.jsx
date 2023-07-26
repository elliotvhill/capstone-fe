import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <div className='nav'>
            <Link to='/'>Home</Link>
            <Link to='/search'>Search</Link>
        </div>
    )
}

export default Nav