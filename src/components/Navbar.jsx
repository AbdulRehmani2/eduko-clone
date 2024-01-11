import './Navbar.css'
import { Link } from 'react-router-dom'


export default function Navbar()
{
    return (
        <div className="nav-container">
            <div>
                <div className='nav-title-container'>
                    <Link to={'/'} className='nav-title'>EDUKO</Link>
                    <Link to={'/'}>Course Catalogue</Link>
                </div>
                <div className='nav-reg-container'>
                    <Link to={'/register'}>Register</Link>
                    <Link to={'/login'}>Login</Link>
                </div>
            </div>
        </div>
    )
}