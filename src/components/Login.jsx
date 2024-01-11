import { Link } from 'react-router-dom'
import './Login.css'

export default function Login(){
    return (
        <div className="login-container">
            <div>
                <div className='login-title-section'>
                    <Link to={'/'} className='login-title'>EDUKO</Link>
                    <h3>Login to Your Account</h3>
                </div>
                <div className='login-data-section'>
                    <input placeholder='Email'></input>
                    <input placeholder='Password'></input>
                    <p><a>Forgot your Password</a><br></br>If your email is not confirmed, <a>click here</a> to resend email.</p>
                </div>
                <div className='login-submit-section'>
                    <Link to={'/register'}>Create Account</Link>
                    <button>LOGIN</button>
                </div>
            </div>
        </div>
    )
}