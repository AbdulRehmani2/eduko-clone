import {Link} from 'react-router-dom'
import './Register.css'

export default function Register(){
    return(
        <div className="register-container">
            <div>
                <div className='register-title-section'>
                    <Link to={'/'} className='login-title'>EDUKO</Link>
                    <h3>Register a New Account</h3>
                </div>
                <div className='register-data-section'>
                    <div>
                        <input placeholder='Full Name' style={{width: '30rem%'}}></input>
                    </div>
                    <div className='register-data-input-section'>
                        <input placeholder='Email'></input>
                        <input placeholder='Registration Number'></input>
                        <input placeholder='Password'></input>
                        <input placeholder='Confirm Password'></input>
                    </div>
                </div>
                <div className='register-submit-section'>
                    <Link to={'/register'}>Sign In Instead</Link>
                    <button>REGISTER</button>
                </div>
            </div>
        </div>
    )
}