import TitleSection from '../components/TitleSection'
import SubmitSection from '../components/SubmitSection'
import '../components/Register.css'

export default function RegisterPage(){
    let data = {
        path: '/login',
        text: 'Sign In Instead',
        button: 'REGISTER'
    }
    return (
        <div className='register-container'>
            <div>
            <TitleSection text={"Register a New Account"}></TitleSection>
            <div className='register-data-section'>
                <div>
                    <input placeholder='Full Name' style={{width: '30rem'}}></input>
                </div>
                <div className='register-data-input-section'>
                    <input placeholder='Email'></input>
                    <input placeholder='Registration Number'></input>
                    <input placeholder='Password'></input>
                    <input placeholder='Confirm Password'></input>
                </div>
            </div>
            <SubmitSection data={data}></SubmitSection>
        </div>
        </div>
        
    )
}