import Login from '../components/Login'
import SubmitSection from '../components/SubmitSection'
import TitleSection from '../components/TitleSection'
import '../components/Login.css'

export default function LoginPage(){
    let data = {
        path: '/register',
        text: 'Sign Up Instead',
        button: 'LOGIN'
    }
    return (
        <>
        <div className='login-container'>
            <div>
                <TitleSection text={"Login To Your Account"}></TitleSection>
                <div className='login-data-section'>
                    <input placeholder='Email'></input>
                    <input placeholder='Password'></input>
                    <p><a>Forgot your Password</a><br></br>If your email is not confirmed, <a>click here</a> to resend email.</p>
                </div>
                <SubmitSection data={data}></SubmitSection>
            </div>
        </div>
        </>
    )
}