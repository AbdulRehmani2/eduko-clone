import './Navbar.css'


export default function Navbar()
{
    return (
        <div className="nav-container">
            <div>
                <div className='nav-title-container'>
                    <a href="../index.html" className='nav-title'>EDUKO  </a>
                    <a href="../index.html">Course Catalogue</a>
                </div>
                <div className='nav-reg-container'>
                    <a href="#">Register</a>
                    <a href="#">Login</a>
                </div>
            </div>
        </div>
    )
}